import React from 'react';
import pic1 from '../../assets/Banner/pic1.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse py-10">
    <div className='flex-1'>
    <img
      src={pic1}
      className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className='flex-1'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;