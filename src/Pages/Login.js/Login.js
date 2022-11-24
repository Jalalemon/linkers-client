import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContexts } from "../../auth/AuthProvider";



import "./Login.css";

function Login() {
 const {
   register,
   formState: { errors },
   handleSubmit,
 } = useForm();

 const { signIn } = useContext(AuthContexts)
 const [loginError, setLoginError] = useState("");
 const location = useLocation();
 const navigate = useNavigate();
 const from = location.state?.from?.pathname || "/";

 // const [loginUserEmail, setLoginUserEmail] = useState('');
 // const [token] = useToken(loginUserEmail)

 // if(token){
 //    navigate(from, { replace: true });
 // }
 const handleLogin = (data) => {
   console.log(data);
   setLoginError("");
   signIn(data.email, data.password)
     .then((result) => {
       const user = result.user;
       console.log(user);
       // setLoginUserEmail(data.email)
       navigate(from, { replace: true });
     })
     .catch((error) => {
       console.error(error.message);
       setLoginError(error.message);
     });
 };
 return (
   <div className="h-[800px] flex justify-center items-center ">
     <div className="w-96 p-7">
       <h2 className="text-4xl"> login</h2>
       <form onSubmit={handleSubmit(handleLogin)}>
         <div className="form-control w-full max-w-xs">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input
             {...register("email", {
               required: "Email Address is required",
               minLength: {
                 value: 6,
                 message: "password required must be 6 character",
               },
             })}
             className="input input-bordered w-full mx-auto max-w-xs"
             placeholder="email"
           />
           {errors.email && (
             <p className="text-orange-500 font-semibold" role="alert">
               {errors.email?.message}
             </p>
           )}
         </div>
         <div className="form-control w-full max-w-xs">
           <label className="label">
             <span className="label-text">Password</span>
           </label>
           <input
             {...register("password", { required: "password is required" })}
             className="input w-full input-bordered mx-auto max-w-xs"
             placeholder="Password"
           />
           {errors.password && (
             <p className="text-orange-500 font-semibold" role="alert">
               {errors.password?.message}
             </p>
           )}
         </div>
         <label className="label">
           <span className="label-text">Choose account</span>
         </label>
         <select
           name="slot"
           className="select select-bordered max-w-xs w-full"
         >
           <option value='buyers'>
            Buyers
           </option>
           <option value='sellers'>
             Sellers
           </option>
         </select>
         <input className="btn btn-accent w-full" value="login" type="submit" />
         <div>
           {loginError && <p className="text-orange-600">{loginError} </p>}
         </div>
       </form>
       <p>
         {" "}
         create a new account{" "}
         <Link to="register">
           {" "}
           <span className="text-orange-500 font-semibold">sign up</span>
         </Link>
       </p>
       <div className="flex flex-col w-full border-opacity-50">
         <div className="divider">OR</div>
         <button className="btn btn-outline w-full">login with google</button>
       </div>
     </div>
   </div>
 );
}

export default Login;
