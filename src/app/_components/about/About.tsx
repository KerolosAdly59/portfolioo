import React from 'react'
import { motion } from 'framer-motion';
import nextImage from "../../../../public/images.png";
import Image from "next/image";
import { SiRedux } from "react-icons/si";

const About = () => {
  const skills = [
    { name: "HTML", icon: <i className="fa-brands fa-html5 fa-4x text-orange-600 animate-bounce"></i> },
    { name: "CSS", icon: <i className="fa-brands fa-css3-alt fa-4x text-blue-500 animate-bounce"></i> },
    { name: "Bootstrap", icon: <i className="fa-brands fa-bootstrap fa-4x text-purple-600 animate-caret-blink"></i> },
    { name: "Tailwind CSS", icon: <i className="fa-brands fa-tailwind-css fa-4x text-teal-500 animate-caret-blink"></i> },
    { name: "JavaScript", icon: <i className="fa-brands fa-js fa-4x text-yellow-500 animate-caret-blink"></i> },
    { name: "TypeScript", icon: <i className="fa-brands fa-typescript fa-4x text-blue-500 animate-caret-blink"></i> },
    { name: "Redux", icon: <SiRedux size={60} className="animate-spin dark:text-black" /> },
    { name: "React", icon: <i className="fa-brands fa-react fa-4x text-cyan-700 animate-spin"></i> },
    { name: "Next.js", icon: <Image alt="Next.js logo" src={nextImage} width={64} height={64} className="rounded-full animate-spin" /> },
    { name: "GitHub", icon: <i className="fab fa-github fa-4x text-gray-800 animate-bounce"></i> },
  ];
  return (

<div>

</div>
  )
}

export default About
