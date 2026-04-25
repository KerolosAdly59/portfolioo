"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Typing from '../typing/Typing';
import Image from 'next/image';
import imageCover from "../../../../IMG_20260410_145607.jpg";
import { motion } from "framer-motion";

const Home = () => {
function shareWhatsApp() {
  const phoneNumber = "201274739967"; 
  
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("")}`;
  
  window.open(url, "_blank");
}

  return (
    <div className='md:flex flex-wrap justify-around items-center  py-12'>

      {/* Text Section - يظهر من الشمال */}
      <motion.div 
        className='text-center  space-y-4'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1 
          className='font-bold text-3xl ' 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Hi, I’m Kerolos
        </motion.h1>
        <motion.h2 
          className='font-semibold text-2xl ' 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Front-End Developer (React/Next.js)
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Typing />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className='my-4 flex justify-center gap-3'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href='https://www.linkedin.com/in/kerolos-adly-261b22344?utm_source=share_via&utm_content=profile&utm_medium=member_android' target='_blank' rel="noopener noreferrer" className='text-blue-500 text-4xl'><i className='fa-brands fa-linkedin'></i></a>
          <a href='https://www.github.com/KerolosAdly59' target='_blank' rel="noopener noreferrer" className='text-gray-700 text-4xl'><i className='fa-brands fa-github'></i></a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=kerolosadly59@gmail.com' target='blank' className='text-slate-800 text-4xl'><i className='fa-solid fa-envelope'> </i></a>
              <div className='text-green-600 text-4xl cursor-pointer' onClick={shareWhatsApp}><i className='fa-brands fa-whatsapp'></i></div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className='flex justify-center gap-3 my-4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button className='px-6 py-2'><a href='#projects'>View My Work</a></Button>
          <Button className='px-6 py-2'><a href='#contact'>Contact Me</a></Button>
        </motion.div>

        {/* CV Links */}
        <motion.div
          className='flex justify-center gap-3 my-4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="/cv.pdf" download className="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition duration-300">
            Download CV <i className='fas fa-download'></i>
          </a>
          <a href="/cv.pdf" target="_blank" className='bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition duration-300'>
            View CV
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section - يظهر من اليمين */}
      <motion.div 
        className='mt-6 md:mt-0 px-4 md:px-0  flex justify-center'
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image 
          src={imageCover} 
          alt="Profile" 
          width={200} 
          height={200} 
          className='rounded-full w-80 object-cover shadow-2xl border-4 border-white'
        />
      </motion.div>

    </div>
  );
}


export default Home;