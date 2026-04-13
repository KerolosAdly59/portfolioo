"use client";

import React from "react";
import { motion } from "framer-motion";

// import About from "./_components/about/About";
import LazySkills from "./_components/skills/LazySkills";
import Projects from "./_components/projects/Projects";
import { Contact } from "./_components/contact/Contact";
import Footer from "./_components/footer/Footer";
import Home from "./_components/home/Home";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Page = () => {
  const sections = [
    { id: "home", component: <Home /> },
    { id: "skills", component: <LazySkills /> },
    { id: "projects", component: <Projects /> },
    { id: "contact", component: <Contact /> },
    { id: "footer", component: <Footer /> },
  ];

  return (
    <div className="font-serif bg-linear-to-r from-slate-200 to-white h-full dark:bg-gradient-to-r dark:from-slate-700 dark:via-slate-700 dark:to-slate-400 dark:text-slate-100">
      <div className="w-[95%] md:w-[85%] mx-auto pt-20">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="shadow-[0_10px_30px_rgba(100,100,100,0.35)] rounded-[20px] bg-linear-to-r from-slate-100 to-slate-300 mt-4 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={fadeInUp}
          >
            {section.component}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Page;