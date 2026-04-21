import React from 'react'
import TechStack from './TechStack'
import Education from './Education'

const About = () => {
  return (
    <div>

   
     <div className='flex flex-col md:flex-row items-center bg-gray-100 md:p-10   py-20  gap-10'>
 
      <div className='w-full md:w-1/2  flex   -mt-30 md:mt-0 px-2 justify-center'>
        <img src="https://www.omaralkhatib.com/content/ab-img.png" alt="" className='w-full max-w-md object-cover' />
      </div>
 
      <div className='w-full md:w-1/2 flex flex-col px-5 md:px-0 gap-5'>
  <h1 className='text-3xl font-bold text-gray-900 text-center md:text-start '>About</h1>
   <p className='text-2xl font-medium text-center md:text-start text-gray-800'>
    <span className=' px-2 rounded'>Frontend Developer</span>{' '}
    from <span className='text-pink-500 font-semibold'>Lucknow</span> — I turn ideas into{' '}
    <span className='text-purple-500 italic font-semibold'>fast, interactive</span> web experiences.
  </p>
  <p className='text-[14px] md:font-semibold font-medium text-center md:text-start leading-relaxed'>
    Passionate about crafting fast, clean, and enjoyable interfaces using React.js, Tailwind CSS, and GSAP. I work closely with APIs to bring smooth, dynamic user experiences to life.
  </p>
  <div className='flex flex-wrap  justify-center md:justify-start gap-3'>
    <span className='border border-pink-500  font-semibold px-4 py-1.5 rounded-full'>React.js</span>
    <span className='border border-pink-500  font-semibold px-4 py-1.5 rounded-full'>Tailwind CSS</span>
    <span className='border border-pink-500 font-semibold   px-4 py-1.5 rounded-full'>GSAP</span>
  </div>  
 <a 
  href="https://drive.google.com/uc?export=download&id=1mBFKcvJPtYD4niDvb77D_3jURhNGLk7b"
  target="_blank"
  rel="noopener noreferrer"
  className='w-fit bg-pink-500 hover:bg-pink-600 text-white font-semibold px-7 py-3 rounded-full flex items-center ml-25 md:ml-0 gap-2 transition-all hover:scale-105 cursor-pointer'
>
  Download CV <i className="ri-download-line"></i>
</a>
</div>
 
    </div>
    <div className=''>
<TechStack/>
    </div>
    <section>
      <Education/>
    </section>

     </div>
  )
}

export default About