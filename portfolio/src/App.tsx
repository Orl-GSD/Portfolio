import { SiMaterialdesignicons } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

import React from 'react'
import Marquee from 'react-fast-marquee'


const App = () => {
  return (
    <div className="flex flex-col h-full bg-[rgb(2,6,24)] font-sans w-full">
      
      <div className="px-8 mt-4 w-full overflow-x-hidden sticky top-0 z-10 transparent">
        <nav className="border-2 border-white w-full py-4 rounded-2xl">
          <div className="mx-8 flex justify-between items-center">
            <a href="#hero" className="text-white text-2xl font-black">Earl Dicipulo</a>
            <ul className="flex space-x-6 font-bold z-10">
              <li><a href="#about" className="text-white hover:text-lime-400 hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)] transition-colors">About</a></li>
              <li><a href="#skills" className="text-white hover:text-lime-400 hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)] transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-white hover:text-lime-400 hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)] transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-white hover:text-lime-400 hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)] transition-colors">Projects</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="hero" className="lg:mx-24 sm:mx-12 flex lg:justify-between sm:justify-center place-items-center overflow-x-hidden">
        <div className="sm:mt-24">
          <div className="flex flex-col text-white font-black lg:text-9xl sm:text-8xl -space-y-4 text-pop-up-top
                          lg:place-items-start sm:place-items-center">
            <p>EARL</p> 
            <p>DICIPULO</p>
          </div>
          <div className="lg:mt-2 sm:mt-0 lg:place-items-start sm:place-items-center">
            <p className='text-lime-400 font-bold text-3xl'>UI/UX Designer & Frontend Developer</p>
            <div className='text-lime-400 text-xl flex space-x-4 mt-4'>
              <span className="border-3 border-lime-400 rounded-full p-2">
                <SiMaterialdesignicons />
              </span>
              <span className="border-3 border-lime-400 rounded-full p-2">
                <FaCode />
              </span>
            </div>
          </div>
        </div>
        <div>
            <div className="w-[937px] h-[937px] shrink-0 absolute circleBlur right-0 top-0 translate-x-40 -translate-y-20 animate-pulse"></div>            
            <img src="/owl.svg" className='lg:h-[36rem] lg:w-[28rem] sm:w-0'></img>
        </div>
      </div>

      <div className="overflow-x-hidden sm:mt-24">
          <Marquee className='lg:space-x-6 sm:space-x-1 -translate-y-8'>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiReact /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiJavascript /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiNextdotjs /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiVite /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiNodedotjs /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiCss3 /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiHtml5 /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiTailwindcss /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiFigma /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiAdobeillustrator /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiAdobephotoshop /></div>
          </Marquee>
      </div>

      <div id="about" className="lg:mt-8 sm:mt-0 w-full h-full bg-gradient-to-t from-slate-900 to-slate-950 flex place-items-center justify-center">
        <div className="lg:mx-20 sm:mx-36 lg:pb-24 sm:pb-12 mt-20 place-items-center">
          <h1 className="lg:text-7xl sm:text-5xl text-lime-400 font-black font-sans">ABOUT ME</h1>
          <div className="lg:w-[38rem] sm:w-[28rem]">
            <p className="lg:text-2xl sm:text-lg text-white mt-12 font-bold text-center">
              I am <span className='text-lime-400 drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]'>Earl Geibriel Dicipulo</span>, a UI/UX designer and a frontend developer with a passion for creating visually-appealing and functional user interfaces.
            </p>
            <p className="lg:text-2xl sm:t  ext-lg text-white mt-4 font-bold text-center">
              I have a background in design principles and a keen eye for detail, which allows me to create visually appealing and user-friendly designs.
              Through the use of modern technologies, tools, and frameworks, I was able to create user-centered and functional interfaces for school organizations.
              I am also always to eager learn and improve my skills, and I am always looking for new challenges to tackle.
            </p>
          </div>
        </div>
      </div>

      <div id="skills" className="mx-20 mt-20 place-items-center overflow-x-hidden">
        <h1 className="text-lime-400 sm:text-5xl lg:text-7xl font-black font-sans">MY SKILLS</h1>
        <div className="sm:mt-12 lg:mt-24">
          <div className="justify-center place-items-center">
            <p className="text-white text-3xl font-bold font-sans lg:mb-0 sm:mb-6">Frontend Development</p>
            <div className="grid lg:grid-cols-8 sm:grid-cols-4">
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiReact /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiJavascript /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiNextdotjs /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiVite /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiNodedotjs /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiCss3 /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiHtml5 /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 lg:my-6 sm:my-2 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiTailwindcss /></div>
            </div>
          </div>
          <div className="justify-center place-items-center mt-8">
            <p className="text-white text-3xl font-bold font-sans mb-2">UI/UX Design</p>
            <div className="flex flex-row">
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 my-6 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiFigma /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 my-6 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiAdobeillustrator /></div>
              <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-2 my-6 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiAdobephotoshop /></div>
            </div>
          </div>
        </div>
      </div>

      <div id="experience" className="mx-20 mt-48 place-items-center overflow-x-hidden">
        <h1 className="text-lime-400 sm:text-5xl lg:text-7xl font-black font-sans">MY EXPERIENCE</h1>
        <div className="flex space-x-8 sm:-translate-y-10 lg:-translate-y-0">
          <div className="mt-35 place-items-center">
            <div className="p-3 bg-white rounded-full"></div>
            <div className="lg:h-72 sm:h-92 border-l-2 border-white"></div>
            <div className="p-3 bg-white rounded-full"></div>
            <div className="lg:h-73 sm:h-85 border-l-2 border-white"></div>
            <div className="p-3 bg-white rounded-full"></div>
          </div>
          <div className="justify-center place-items-center mt-24 space-y-8">
            <div className="border-2 border-white rounded-2xl p-8">
              <p className="text-3xl font-bold text-white">Jul 2024 - Present</p>
              <div className='lg:w-[40rem] sm:w-[24rem] mt-4 border-t-1 border-white pt-4'>
                <p className='text-2xl font-bold text-lime-400'>UI/UX Designer & Frontend Developer</p>
                <p className='text-xl font-semibold text-white italic'>LIKHA Design + Build</p>
                <p className="text-l text-white mt-4">
                  Designed and developed a project management and materials monitoring system for an
                  architectural firm using Node.js and Supabase. The system was designed to help the firm manage their projects and materials,
                  boosting efficiency and productivity.
                </p>
              </div>
            </div>

            <div className="border-2 border-white rounded-2xl p-8">
              <p className="text-3xl font-bold text-white">Feb 2025 - Present</p>
              <div className='lg:w-[40rem] sm:w-[24rem] mt-4 border-t-1 border-white pt-4'>
                <p className='text-2xl font-bold text-lime-400'>UI/UX Designer</p>
                <p className='text-xl font-semibold text-white italic'>SAMAHAN Systems Development</p>
                <p className="text-l text-white mt-4">
                  Designed user-centered interfaces for a web-based system for two school organizations to help making information more accessible
                  for students online and to help the organizations manage their events and make registrations efficient.
                </p>
              </div>
            </div>

            <div className="border-2 border-white rounded-2xl p-8">
              <p className="text-3xl font-bold text-white">Mar 2025 - Present</p>
              <div className='lg:w-[40rem] sm:w-[24rem] mt-4 border-t-1 border-white pt-4'>
                <p className='text-2xl font-bold text-lime-400'>UI/UX Designer & Frontend Developer</p>
                <p className='text-xl font-semibold text-white italic'>LIKHA Design + Build</p>
                <p className="text-l text-white mt-4">
                  Designed a landing website for an architectural firm to showcase their projects and services through
                  online means, allowing them to reach a wider audience and attract more clients.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="projects" className="mx-20 mt-48 place-items-center overflow-x-hidden">
        <h1 className="text-lime-400 lg:text-7xl sm:text-5xl font-black font-sans">MY PROJECTS</h1>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 lg:mt-24 sm:mt-12">
            <div className="overflow-hidden rounded-2xl relative group">
              <img loading='lazy' src="likhaprojmanagement.png" 
              className='h-full w-[32rem] rounded-2xl transition-all duration-300 hover:scale-110'
              ></img>
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <p className="text-white text-xl font-bold text-center">LIKHA Design + Build Project Management and Materials Monitoring System</p>4
              <a href="https://likhadesignbuild.vercel.app/Projects" target="_blank" rel="noopener noreferrer" className="text-white border-2 rounded-2xl px-4 py-2 hover:bg-white hover:text-black transition">View Project</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl relative group">
              <img loading='lazy' src="likhalandingweb.png" 
              className='h-full w-[32rem] rounded-2xl transition-all duration-300 hover:scale-110'
              ></img>
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 p-4">
                <p className="text-white text-xl font-bold text-center">LIKHA Design + Build Landing Website</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl relative group">
              <img loading='lazy' src="staticwebpage.png" 
              className='h-full w-[32rem] rounded-2xl transition-all duration-300 hover:scale-110'
              ></img>
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <p className="text-white text-xl font-bold text-center">Static Web Page</p>
              <a href="https://staticwebpage-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white border-2 rounded-2xl px-4 py-2 hover:bg-white hover:text-black transition mt-5">View Project</a>
              </div>
            </div>
          <img loading='lazy' src="comingsoon.png" className='h-full w-[32rem] rounded-2xl'></img>
        </div>
      </div>

      <div className="mt-32 overflow-x-hidden">
          <Marquee className='lg:space-x-6 sm:space-x-1 -translate-y-8 '>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiReact /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiJavascript /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiNextdotjs /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiVite /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiNodedotjs /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiCss3 /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiHtml5 /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiTailwindcss /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiFigma /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiAdobeillustrator /></div>
            <div className="text-7xl text-white border-2 border-white p-4 rounded-2xl mx-6 my-10 hover:text-slate-900 hover:bg-lime-400 hover:border-lime-400 transition-colors hover:drop-shadow-[0px_0px_12px_rgba(154,230,0,1)]"><SiAdobephotoshop /></div>
          </Marquee>
      </div>



    </div>
  )
}

export default App
