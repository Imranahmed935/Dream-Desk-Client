import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.png'
import AuthContext from '../Context/AuthContext/AuthContext';
import PrivateRoute from '../routes/PrivateRoute';

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext)
  const handleSignOut = ()=>{
    signOutUser()
    .then(() =>{
      console.log('signout Success')
    })
    .catch(error =>{
      console.log('error', error)
    })
  }
    const links = <div className='lg:flex gap-4'>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <PrivateRoute>
        <NavLink to={'/addJob'}><li>add Job</li></NavLink>
        <NavLink to={'/myApplication'}><li>My Applications</li></NavLink>
        <NavLink to={'/myPostedJob'}><li>My Posted Job</li></NavLink>
        </PrivateRoute>
    </div>
    return (
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <div className='flex w-10'>
    <img src={logo} alt="" />
    <Link to={'/'} className="btn btn-ghost text-xl">Dream Desk</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
  {
    user? <>
    <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
    <button onClick={handleSignOut} className='btn bg-red-600'>LogOut</button>
    </>:
    <>
    <Link to="/register" className="underline">Register</Link>
    
    <Link to="/login">
    <button className="btn">LogIn</button>
   </Link>
    </>
  }
</div>

 </div>
    );
};

export default Navbar;