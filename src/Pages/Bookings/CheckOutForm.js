import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({bookings}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [cardError, setCardError] = useState('');
    const {balance, email, _id, name} = bookings;
    const [success, setSuccess] = useState('');
    const [transactionId, seTransactionId] = useState('')
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent",{
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({balance})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret) )
    }, [balance])

    const handleSubmit = async(event) =>{
        event.preventDefault();

         if (!stripe || !elements) {
           return;
         }
         const card = elements.getElement(CardElement);

         if (card === null) {
           return;
         }
         const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
         })
         if(error){
            console.log(error);
            setCardError(error.message)
         }
         else{
            setCardError('')
         }
         setSuccess('')
         setProcessing(true)
         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
           {
             payment_method: {
               card: card,
               billing_details: {
                 name: name,
                 email: email
               },
             },
           }
         );
         if(confirmError){
            setCardError(confirmError.message);
            return;
         }
         if(paymentIntent.status === 'succeeded'){
           
            const payment ={
                balance,
                transactionId : paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch("http://localhost:5000/payments", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(payment),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 setSuccess("Congrats your payment completed");
                 seTransactionId(paymentIntent.id);
                 toast.success('your payment completed successfully');
                navigate('/dashboard/myorders')
            })
            

        }
        setProcessing(false)
    }
   
    return (
      <div className="">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-sm btn-primary mt-5"
            type="submit"
            // disabled={ !stripe || !clientSecret || processing }
        
          >
            Pay
          </button>
        </form>
        <p className="text-red-500">{cardError}</p>
        {
          success &&  <div>
            <p className='text-green-500'>{success} </p>
            <p > Your transaction Id <span className='font-semibold'>{transactionId} </span></p>
            </div>
        }
      </div>
    );
};

export default CheckOutForm;