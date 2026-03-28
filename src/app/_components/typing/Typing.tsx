"use client"
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';


const Typing = () => {
    const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "I turn ideas into modern web applications.",
        "I build fast and interactive web apps using React.",
        "I create responsive and user-friendly interfaces."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor:false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <p ref={typedRef} className="text-gray-800 mt-4 text-lg dark:text-white"></p>
    </>
  )
}

export default Typing
