import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProducts = () => {
 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm();

 const handleFormSubmit =(data) =>{
    console.log(data.category);
    
    <>
    {
        data.category === "singer" &&
         fetch("http://localhost:5000/singers", {
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
           //    refetch();
         } else {
           toast.error(data.message);
         }
       })
    },
    {
        data.category === "walton" &&
         fetch("http://localhost:5000/walton", {
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
           //    refetch();
         } else {
           toast.error(data.message);
         }
       })
    },
    {
        data.category === "marcel" &&
         fetch("http://localhost:5000/marcel", {
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
           //    refetch();
         } else {
           toast.error(data.message);
         }
       })
    }
    </>

 }
    return (
      <div>
        <div className="py-20 bg-base-200">
          <div className="hero-content ">
            <div className="card w-full shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="card-body py-20 grid gape-4 grid-cols-1 lg:grid-cols-2"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    placeholder="company"
                    className="input input-bordered"
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
                    <option defaultValue='1'>1</option>
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