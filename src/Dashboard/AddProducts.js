import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContexts } from '../auth/AuthProvider';

const AddProducts = () => {
  const {user} = useContext(AuthContexts)
 const {
   register,
   handleSubmit,

   formState: { errors },
 } = useForm();

const myDate = new Date();
const onDate = moment().format('LLLL')
console.log(onDate);
const navigate = useNavigate();

 const handleFormSubmit =(data) =>{
    console.log(data.category);
    
    <>
      {
      fetch("https://linkers-server.vercel.app/allCategories", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
              //  refetch();
               navigate('/dashboard/myproducts')
          } else {
            toast.error(data.message);
          }
        })
        }
      {data.category === "singer" &&
        fetch("https://linkers-server.vercel.app/singers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success(" Singer Product Added successfully");
                //  refetch();
                   navigate("/dashboard/myproducts");
            } else {
              toast.error(data.message);
            }
          })}
      ,
      {data.category === "walton" &&
        fetch("https://linkers-server.vercel.app/walton", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("walton Product Added successfully");
                //  refetch();
                   navigate("/dashboard/myproducts");
            } else {
              toast.error(data.message);
            }
          })}
      ,
      {data.category === "marcel" &&
        fetch("https://linkers-server.vercel.app/marcel", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("marcel Product Added successfully");
                navigate("/dashboard/myproducts");
              //    refetch();
            } else {
              toast.error(data.message);
            }
          })}
    </>;

 }
    return (
      <div>
        <div className="py-20 bg-base-200">
          <div className="hero-content ">
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="text-3xl font-bold mt-5 text-center text-cyan-400 ">
                Add your Product
              </div>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="card-body py-20 grid gape-4 grid-cols-1 lg:grid-cols-2"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                  
                    placeholder="Your name"
                    className="input uppercase input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                  
                    placeholder="company"
                    className="input uppercase input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">price</span>
                  </label>
                  <input
                    {...register("balance")}
                    type="text"
                    placeholder="price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    {...register("picture")}
                    type="text"
                    placeholder="picture"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">condition</span>
                  </label>
                  <input
                    {...register("condition")}
                    type="text"
                    placeholder="condition"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">phone</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="text"
                    placeholder="phone"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">location</span>
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    name="address"
                    placeholder="location"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">description</span>
                  </label>
                  <input
                    {...register("about")}
                    type="text"
                    name="about"
                    placeholder="description"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Resale price</span>
                  </label>
                  <input
                    {...register("price")}
                    type="text"
                    placeholder="buying price"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">used year</span>
                  </label>

                  <select
                    {...register("index")}
                    name="index"
                    className="select select-bordered w-full"
                  >
                    <option defaultValue="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                {/* <input
                    {...register("index")}
                    type="text"
                    placeholder="purchase year"
                    className="input input-bordered"
                  /> */}

                {/* <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    {...register("category")}
                    type="text"
                    placeholder="category"
                    className="input input-bordered"
                  />
                </div> */}
                <div>
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    {...register("category")}
                    name="category"
                    className="select select-bordered w-full"
                  >
                    <option value="walton">Walton</option>
                    <option value="singer">Singer</option>
                    <option value="marcel">Marcel</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Registered time</span>
                  </label>
                  <input
                    {...register("registered")}
                    type="text"
                   
                    name="registered"
                    placeholder="registered"
                    value={onDate}
                    className="input input-bordered"
                   readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    
                    name="email"
                    placeholder="email"
                   value={user?.email}
                    className="input input-bordered"
                   
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProducts;