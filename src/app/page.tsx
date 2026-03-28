import About from './_components/about/About'
import Skills from './_components/skills/Skills'
import Projects from './_components/projects/Projects'
import { Contact } from './_components/contact/Contact'
import Image from 'next/image'
import imageCover from "../../Gemini_Generated_Image_rumkhfrumkhfrumk.png"
import Footer from './_components/footer/Footer'
import Typing from './_components/typing/Typing'



const page = () => {
  
  return (
    <div className=' bg-linear-to-r from-blue-600 to-blue-300 h-full dark:bg-gradient-to-r dark:from-slate-700 dark:via-slate-700 dark:to-slate-400 dark:text-slate-100' >
      <div className='w-[95%] md:w-[85%] mx-auto pt-20'>
        <section id='home' className='md:px-40 py-12 md:flex flex-wrap justify-between items-center shadow-[0_10px_30px_rgba(194,65,12,0.35)] rounded-[20px] bg-linear-to-r from-blue-200 to-blue-600 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
          <div className='text-center md:w-110'>
            <h1 className='font-bold text-3xl'>Kerolos Adly</h1>
            <h2 className='fond-bold text-2xl'>Front End Developer</h2>
            <Typing />
            <div className='my-2 '>        LinkedIn: <a href='https://www.linkedin.com/in/kerolos-adly-9b1b4a1b2/' rel="noopener noreferrer" target='blank' className='text-blue-800 hover:underline dark:text-blue-400'>Click here to see my Linkedin</a>
            </div>
            <div className='my-2'>        Github: <a href='https://github.com/KerolosAdly59' rel="noopener noreferrer" target='blank' className='text-blue-800  hover:underline dark:text-blue-400'>Click here to see my Github</a>
            </div>
            <div className='my-3'>        CV: <a href="/cv.pdf" download rel="noopener noreferrer"
              className="bg-green-600 text-white px-3 py-1.5 rounded-lg dark:bg-transparent dark:hover:bg-blue-700 hover:bg-blue-700 border border-white    transition duration-300 ">
              Download CV
            </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className=' ms-2 border-white bg-green-600 border   text-white px-3 py-1.5 rounded-lg dark:bg-transparent dark:hover:bg-blue-700 hover:bg-blue-700 transition duration-300 '>
                View CV
              </a>
            </div>
          </div>
          <div className='mt-6 md:mt-0 px-4 md:px-0'><Image alt='' src={imageCover} width={200} height={200} className='w-full shadow-2xl shadow-mist-900 border-4 border-white rounded-full object-cover' /></div>
        </section>

        <section id="about" className='shadow-[0_10px_30px_rgba(194,65,12,0.35)] rounded-[20px] bg-linear-to-r from-blue-200 to-blue-600 mt-4 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
          <About />
        </section>
        <section id="skills" className='shadow-[0_10px_30px_rgba(194,65,12,0.35)] rounded-[20px] bg-linear-to-r from-blue-200 to-blue-600 mt-4 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
          <Skills />
        </section>
        <section id="projects" className='shadow-[0_10px_30px_rgba(194,65,12,0.35)] rounded-[20px] bg-linear-to-r from-blue-200 to-blue-600 mt-4 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
          <Projects />
        </section>
        {/* <section id="experience" className='shadow-[0_10px_30px_rgba(194,65,12,0.35)] rounded-[20px] bg-linear-to-r from-orange-100 to-orange-400 mt-12'>
        <Experience />
      </section> */}
        <section id="contact" className='shadow-[0_10px_30px_rgba(194,65,12,0.35)] rounded-[20px] bg-linear-to-r from-blue-200 to-blue-600 mt-4 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
          <Contact />
        </section>
        <section id="Footer" className='shadow-[0_10px_30px_rgba(194,65,12,0.35)] rounded-[20px] bg-linear-to-r from-blue-200 to-blue-600 mt-4 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default page
