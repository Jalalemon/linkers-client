import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext, AuthContexts } from "../../auth/AuthProvider";

// register
import "./../Login.js/Login.css";

const Register = () => {
//   const { createUser } = useContext(AuthContext);

  // register handler
const {createUser} = useContext(AuthContexts)
  const {register, handleSubmit, formState: {errors}} = useForm()
 const [signUpError, setSignUpError] = useState("");
  const handleSignUp = (data) => {
    console.log(data);

    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .then(error => console.error(error))

    // event.preventDefault();
    // const form = event.target;
    // const password = form.password.value;
    // const email = form.email.value;
    // const name = form.name.value;
    // console.log(email, password, name);
    // createUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
      
    //     form.reset();
    //   })
    //   .catch((error) => console.error(error));
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
              {signUpError && <p className="text-red-600">{signUpError} </p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
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
