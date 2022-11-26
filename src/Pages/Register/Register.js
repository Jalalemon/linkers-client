import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContexts } from "../../auth/AuthProvider";
import useToken from "../../Hoooks/useToken";

// register
import "./../Login.js/Login.css";

const Register = () => {

//   const { createUser } = useContext(AuthContext);

  // register handler
const { createUser, updateUser } = useContext(AuthContexts);
  const {register, handleSubmit, formState: {errors}} = useForm();
 const [signUpError, setSignUpError] = useState("");
 const [createdUser, setCreatedUser] = useState("");
 const [token] = useToken(createdUser);
 const navigate = useNavigate();

 if(token){
  navigate('/')
 }
 
  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('')

    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
         toast.success("user created successfully");
         const userInfo = {
            displayName: data.name
          }
          updateUser(userInfo)
          .then(() => {

            saveUser(data.name, data.email)
            // navigate("/");
           
          } )

          .catch(error => (error))
    
    })
    .catch(error => {
         setSignUpError(error.message);
         console.error(error);
    })
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUser(email);
        // getUserToken(email)
      
      });
  };


  return (
    <div className="hero w-full login my-20">
      <div className="hero-content w-full p-0">
        <div className="card flex-shrink-0 py-20 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl  text-center font-bold">Register Now!</h1>

          <div className="w-20 mx-auto">
            <img
              className="rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYLKfwvwN1K8im_05pqHzJ6suRhzQ8NeKDMtfW7Q&s"
              style={{ width: "185px" }}
              alt="logo"
            />
          </div>
          <div className="mx-auto">
            <h4 className="mt-1 mb-5 pb-1">We are The photographer Team</h4>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "email is required" })}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-orange-500 font-semibold" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: "password is required" })}
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-orange-500 font-semibold" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn type='submit' btn-primary">Sign up</button>
            </div>
            {signUpError && <p className="text-red-600">{signUpError} </p>}
          </form>
          <p className="text-center">
            Already have an account? please{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
