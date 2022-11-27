import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../auth/AuthProvider';

const BookingModal = ({treatement, setTreatment}) => {
    console.log(treatement);
    const {user} = useContext(AuthContexts);
    const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const company = form.company.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const balance = form.balance.value;
   
    console.log(company, name, email,balance, location, phone);
        const booking = {
          picture: treatement.picture,
          name,
          company,
          balance,
          address :location,
          phone,
          email,
        };
         fetch("http://localhost:5000/bookings", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(booking),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             if (data.acknowledged) {
               setTreatment(null);
               toast.success("booking confirmed");
               navigate('/dashboard/myorders')
            //    refetch();
             } else {
               toast.error(data.message);
             }
           });


    setTreatment(null)
}

    return (
      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{}</h3>
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1"
              action="
          "
            >
              <input
                type="text"
                name='company'
                defaultValue={treatement?.company}
                disabled
                className="input input-bordered input-info w-full "
              />
              {/* <select name="slot" className="select select-bordered w-full">
                {slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your name"
                className="input input-bordered input-info w-full "
              />
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                disabled
                placeholder="Email address"
                className="input input-bordered input-info w-full "
              />
              <input
                type="text"
                name="balance"
                defaultValue={treatement?.balance}
                disabled
                placeholder="Phone number"
                className="input input-bordered input-info w-full "
              />
              <input
                type="text"
                name="location"
                placeholder="meeting location"
                className="input input-bordered input-info w-full "
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="input input-bordered input-info w-full "
              />
              <br />
              <input
                className="w-full btn btn-accent"
                type="submit"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default BookingModal;