import React, { useContext, useState } from "react";
import loginImg from "../../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [error,setError] = useState('');
  const handleRegister = (event) => {
  
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
    createUser(email,password)
    .then(res => {
      const user = res.user;
      console.log(user);
      form.reset();
      
    })
    .catch(error=>{
      setError(error.message);
    })    
    

  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="text-center lg:text-left">
          <img src={loginImg} className="w-4/5" alt=""></img>{" "}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form className="card-body" onSubmit={handleRegister}>
            <h1 className="text-5xl font-bold text-center ">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <p className=" text-red-500 text-center">{error}</p>
            <div className="grid justify-items-center mt-6 leading-10">
              <p>Or Sign Up with</p>
              <>
                {" "}
                <FcGoogle />{" "}
              </>{" "}
            </div>
            <div className="">
              <p className="text-center">
                Already have an account ?{" "}
                <Link to="/login" className="text-orange-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
