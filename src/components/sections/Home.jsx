import Spline from '@splinetool/react-spline';
import { useRef, useState, useEffect } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export const Hero = () => {


     useGSAP(() => {

        const tl = gsap.timeline({});

         tl.fromTo('#threed', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        ease: 'power1.inOut', 
                })

        tl.fromTo('.blush', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        ease: 'power1.inOut', 
                })

        tl.fromTo('#content', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        ease: 'power1.inOut', 
                })
                

     }, []);




    return <div id="home" className='flex flex-col itens-center justify-center '>
        
        <div id="threed" >
        <Spline scene="https://prod.spline.design/QQbmO5xUWsi85ooY/scene.splinecode"  className='3DMilk absolute flex flex-col items-center justify-center right-0 left-0 top-0' />
        </div>
        
        

       {/*Content*/}  
        <div id="content" className='flex flex-col items-center justify-center '>
            <h1 className='headings z-1 mb-2 sm:mt-0 mt-15 text-5xl text-pink-100 exo2 sm:text-6xl tracking-[10px]'>MILK</h1>
           
             <h2 className='headings z-1 exo2 mt-0 w-screen px-2 text-xl sm:text-3xl text-[#ffb3d2]/85 tracking-[3px]'>Study the Bible with no limits.</h2>
             <h4 className='headings z-1 kode-mono rounded-full px-5 w-screen py-1 text-xs sm:text-md text-pink-100/70   border-t-white/90 border-r-white/50 border-l-white/50 border-b-white/15 tracking-[2px]'>Compare translations, collaborate, get creative. All in one web app.</h4>

            <div className='z-10 btn absolute flex items-center justify-center bottom-45 sm:bottom-30'>
                 <button className='z-2 exo2 absolute h-12 w-50 bg-white/50 hover:bg-white/70 drop-shadow-xl hover:drop-shadow-2xl drop-shadow-[#ffb3d2]/50 hover:drop-shadow-[#ffb3d2]/80 text-black text-lg tracking-[2px] rounded-full cursor-pointer transition-all duration-400'>Get started</button>
              <button className='z-1 absolute h-12 w-50 text-[#120912] bg-white/70 hover:bg-white rounded-full cursor-pointer transition-all duration-400 blur-sm'></button>
            </div>
           
            <p className='headings z-2 kode-mono flex absolute items-center justify-center bottom-20 px-5 sm:bottom-7  text-[10px] text-pink-100/60 tracking-[2px]'>As newborn babes, desire the sincere milk of the word, that ye may grow thereby:<br></br>1 PETER 2:2</p>
        </div>

        {/*Blush sm to xl*/}       
        <div className='blush hidden sm:flex z-0  bottom-0 h-screen absolute left-0 right-0  flex-col items-center justify-center w-screen blur-[70px] overflow-clip '>
                 <div className='z-1 mt-130 sm:mt-230 absolute  flex items-center justify-center  rounded-full h-90 w-90 sm:h-200 sm:w-200 bg-[#ffb3d2]/50 blur-[50px] animate-[pulse_10s_ease-in-out_infinite]'></div>
                 <div className='z-1 mt-200 sm:mt-240 absolute  flex items-center justify-center rounded-full h-50 w-50  sm:h-130 sm:w-130 bg-[#FBA1C6]'></div>
                  <div className='z-0 mt-300 absolute  flex items-center justify-center h-70 w  sm:h-160 w-screen bg-teal-800 blur-[100px]'></div>
                   <div className='z-0 mt-300 absolute  flex items-center justify-center h-70 w  sm:h-160 w-screen bg-teal-800 blur-[150px]'></div>
        </div>


        {/*Blush mobile*/}
        <div className='blush sm:hidden flex z-0 bottom-0 h-screen absolute left-0 right-0 flex-col items-center justify-center w-screen blur-[70px] overflow-clip '>
                 <div className='z-1 mt-120 absolute  flex items-center justify-center  rounded-full h-90 w-90 sm:h-200 sm:w-200 bg-[#ffb3d2]/50 blur-[50px] '></div>
                 <div className='z-1 mt-140 sm:mt-240 absolute  flex items-center justify-center rounded-full h-50 w-50  sm:h-130 sm:w-130 bg-[#FBA1C6]'></div>
                 <div className='z-0 mt-300 absolute  flex items-center justify-center h-70 w  sm:h-160 w-screen bg-teal-800 blur-[100px]'></div>
                  <div className='z-0 mt-300 absolute  flex items-center justify-center h-150 sm:h-160 w-screen bg-teal-800 blur-[150px]'></div>
        </div>
      
            
    </div>
}