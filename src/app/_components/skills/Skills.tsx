import React from 'react'
import nextImage from "../../../../public/images.png"
import Image from 'next/image'
import Image2 from '../../../../public/redux.png'
import { SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <div className='flex gap-8 py-12 flex-wrap justify-center items-center'>
      <i className='fas fa-code fa-3x'></i>

      <div className='text-center font-bold flex flex-col items-center gap-2'>
        <i className="fa-brands fa-html5 fa-4x text-orange-600 animate-bounce hover:scale-110 transition-transform"></i>
        <p>HTML</p>
      </div>

      <div className='text-center font-bold flex flex-col items-center gap-2'>
        <i className="fa-brands fa-css3-alt fa-4x animate-bounce text-blue-500 hover:scale-110 transition-transform"></i>
        <p>CSS</p>
      </div>
      <div className='text-center font-bold flex flex-col items-center gap-2'>
        <i className="fa-brands fa-tailwind-css fa-4x text-teal-500 animate-caret-blink hover:scale-110 transition-transform"></i>
        <p>Tailwind CSS</p>
      </div>

      <div className='text-center font-bold flex flex-col items-center gap-2'>
        <i className="fa-brands fa-js fa-4x text-yellow-500 animate-caret-blink hover:scale-110 transition-transform"></i>
        <p>JavaScript</p>
      </div>
<div className='text-center font-bold flex flex-col items-center gap-2 '>
        
              <SiRedux size={60}  className=' animate-spin hover:scale-110 transition-transform dark:text-black'/>

        <p>redux</p>
      </div>

      <div className='text-center font-bold flex flex-col items-center gap-2'>
        <i className="fa-brands fa-react fa-4x text-cyan-700 animate-spin hover:scale-110 transition-transform"></i>
        <p>React</p>
      </div>


      <div className='text-center font-bold flex flex-col items-center gap-2'>
        <Image
          alt='Next.js logo'
          src={nextImage}
          width={64}
          height={64}
          className='rounded-full animate-spin  hover:scale-110 transition-transform'
        />
        <p>Next.js</p>
      </div>

      <div className='text-center font-bold flex flex-col items-center gap-2'>
        <i className='fab fa-github fa-4x text-gray-800 animate-bounce hover:scale-110 transition-transform'></i>
        <p>GitHub</p>
      </div>
      <i className='fas fa-code fa-3x'></i>
    </div>
  )
}

export default Skills