"use client";

import React from "react";
import nextImage from "../../../../public/images.png";
import Image from "next/image";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
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
    <div className=" py-12">
      <div>
                <h1 className="text-center font-bold text-3xl py-8">Who Am I?</h1>

      <p className='font-bold p-10 text-[20px]'>Hi, I'm Kerolos Adly, a Frontend Developer passionate about building modern and interactive web applications.
I specialize in React and Next.js, focusing on creating responsive and user-friendly interfaces.
I enjoy turning ideas into real products and continuously learning new technologies to improve my skills.
</p>
      </div>
      {/* <h1 className="text-center font-bold text-3xl py-8">Skills</h1> */}
      <div className="flex gap-8 py-12 flex-wrap justify-center items-center">
        <i className="fas fa-code fa-3x"></i>

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="text-center font-bold flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}

        <i className="fas fa-code fa-3x"></i>
      </div>
    </div>
  );
};

export default Skills;