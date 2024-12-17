import React from 'react';
import pic1 from '../../assets/Banner/pic1.jpg'
import pic2 from '../../assets/Banner/pic2.jpg'
import { motion } from "motion/react"
import { easeOut } from 'motion';
import JobSlider from '../JobSlider/Jobslider';


const Banner = () => {
    return (
    <div className=" min-h-[500px] bg-[#f2f6fd]">
  <div className="hero-content flex-col gap-52 lg:flex-row-reverse">
    <div className='flex-1 lg:-mr-52'>
    <motion.img
    animate={{ y: [30, 70, 30] }}
    transition={{duration:8, delay:1 , repeat:Infinity}}
      src={pic1}
      className="max-w-sm border-l-8 border-b-8 border-blue-400 rounded-t-3xl rounded-br-3xl" />
    <motion.img
    animate={{ x: [30, 80, 30] }}
    transition={{duration:8, delay:1 , repeat:Infinity}}
      src={pic2}
      className="max-w-sm border-l-8 border-b-8 border-blue-400 rounded-t-3xl rounded-br-3xl" />
    </div>

    <motion.div 
    animate={{ x: 100, }}
    transition={{duration:2, delay:2 , ease: easeOut}}
    className='flex-1 sm:-mt-32 lg:-ml-24'>
       <h1 className="text-5xl font-bold">The <motion.span
        animate={{color: ["#00f"],}}
       >Easiest</motion.span> Way
       to Get Your New Job</h1>
       <p className="py-6">
          Each month, more than 3 million job seekers turn to
          website in their search for work, making over 140,000
          applications every single day
      </p>
      <button className="btn bg-blue-500 text-white">Get Started</button>
    </motion.div>
  </div>
  <div class="flex items-center lg:-mt-44 bg-white rounded-lg shadow-md p-4 space-x-2 max-w-3xl">
  <div class="flex items-center space-x-2">
    <span class="text-gray-500 text-lg">
      <i class="fas fa-briefcase"></i>
    </span>
    <select class="border-none bg-transparent focus:outline-none text-gray-700 px-4">
      <option value="">Industry</option>
      <option value="tech">Tech</option>
      <option value="finance">Finance</option>
      <option value="healthcare">Healthcare</option>
      <option value="education">Education</option>
      <option value="retail">Retail</option>
    </select>
  </div>
  <div class="flex items-center space-x-2">
    <span class="text-gray-500 text-lg">
      <i class="fas fa-map-marker-alt"></i>
    </span>
    <select class="border-none px-6 bg-transparent focus:outline-none text-gray-700">
      <option value="">Location</option>
      <option value="afghanistan">Afghanistan</option>
      <option value="albania">Albania</option>
      <option value="algeria">Algeria</option>
      <option value="andorra">Andorra</option>
      <option value="angola">Angola</option>
      <option value="argentina">Argentina</option>
      <option value="armenia">Armenia</option>
      <option value="australia">Australia</option>
      <option value="austria">Austria</option>
      <option value="azerbaijan">Azerbaijan</option>
      <option value="bahamas">Bahamas</option>
      <option value="bahrain">Bahrain</option>
      <option value="bangladesh">Bangladesh</option>
      <option value="brazil">Brazil</option>
      <option value="brunei">Brunei</option>
      <option value="bulgaria">Bulgaria</option>
      <option value="burkina-faso">Burkina Faso</option>
      <option value="china">China</option>
      <option value="colombia">Colombia</option>
      <option value="comoros">Comoros</option>
      <option value="congo">Congo</option>
      <option value="croatia">Croatia</option>
      <option value="cuba">Cuba</option>
      <option value="cyprus">Cyprus</option>
      <option value="czech-republic">Czech Republic</option>
      <option value="denmark">Denmark</option>
      <option value="djibouti">Djibouti</option>
      <option value="dominica">Dominica</option>
      <option value="dominican-republic">Dominican Republic</option>
      <option value="ecuador">Ecuador</option>
      <option value="egypt">Egypt</option>
      <option value="el-salvador">El Salvador</option>
      <option value="estonia">Estonia</option>
      <option value="eswatini">Eswatini</option>
      <option value="ethiopia">Ethiopia</option>
      <option value="fiji">Fiji</option>
      <option value="finland">Finland</option>
      <option value="france">France</option>
      <option value="germany">Germany</option>
      <option value="ghana">Ghana</option>
      <option value="greece">Greece</option>
      <option value="guatemala">Guatemala</option>
      <option value="haiti">Haiti</option>
      <option value="honduras">Honduras</option>
      <option value="hungary">Hungary</option>
      <option value="iceland">Iceland</option>
      <option value="india">India</option>
      <option value="indonesia">Indonesia</option>
    </select>
  </div>
  <div class="flex items-center space-x-2 flex-1">
    <span class="text-gray-500 text-lg">
      <i class="fas fa-th"></i>
    </span>
    <input
      type="text"
      placeholder="Your keyword..."
      class="border-none bg-transparent focus:outline-none w-full text-gray-700"
    />
  </div>
  <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center">
    <i class="fas fa-search mr-2"></i> Search
  </button>
</div>
<div className='flex gap-2 mt-10'>
  <h1 className='font-bold cursor-pointer'>Popular search: </h1>
  <h1 className='underline cursor-pointer'>Designer</h1>
  <h1 className='underline cursor-pointer'>Web</h1>
  <h1 className='underline cursor-pointer'>ios</h1>
  <h1 className='underline cursor-pointer'>Developer</h1>
  <h1 className='underline cursor-pointer'>PHP</h1>
</div>
<JobSlider/>
</div>
    );
};

export default Banner;