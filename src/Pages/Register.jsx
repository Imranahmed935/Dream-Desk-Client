import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerData from '../assets/register.json'
import AuthContext from '../Context/AuthContext/AuthContext';

const Register = () => {
  const {registerUser} = useContext(AuthContext)
  const handleRegister =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    registerUser(email, password)
    .then((result)=>{
      console.log(result.user)
      form.reset()
    })
    .then((error)=>{
      console.log(error)
    })
  }
    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left sm:w-1/2">
      <Lottie animationData={registerData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl py-2 px-2 font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
);
};

export default Register;