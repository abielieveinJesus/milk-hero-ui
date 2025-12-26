import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import milklogo from "../assets/milklogo.png"
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react"

export const Nav = () => {

  const logo = milklogo

   useGSAP(() => {

         gsap.fromTo('.navi', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        delay:2,
                        ease: 'power1.inOut', 
                })

            gsap.fromTo('.milklogo', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        delay:2,
                        ease: 'power1.inOut', 
                })


      

     }, []);


      //Contact Form logic
    
    const [MenuOpen, setMenuOpen] = useState(false);
    
     const openMenu = () => {
        setMenuOpen(true)
    
       
    
    
      }
    
      const closeMenu = () => {
        setMenuOpen(false)
        
        
      }



    return <nav className="w-screen z-100 border-none">
    <div className="nav border-none">

     <a href="#home">
       <img src={logo} className='milklogo absolute z-10 h-10 w-10 top-4 left-5 opacity-80 hover:opacity-100 transition-all duration-400'></img>
     </a>
     
    
      {/*nav*/}  
       <div className='navi hidden lg:flex z-10 absolute gap-7 right-7 top-4  '>
        <div className='text-md exo2 hover:text-pink-100 text-pink-100/70 transition-all duration-200 cursor-pointer'>Home</div>
         <div className='text-md exo2 hover:text-pink-100 text-pink-100/70 transition-all duration-200 cursor-pointer'>About</div>
           <div className='text-md exo2 hover:text-pink-100 text-pink-100/70 transition-all duration-200 cursor-pointer'>Community</div>
              <div className='text-md exo2 hover:text-pink-100 text-pink-100/70 transition-all duration-200 cursor-pointer'>Login</div>
          
       </div>

        {/*nav*/}  
       <div onClick={openMenu} className='navi lg:hidden flex z-10 absolute gap-7 top-5 right-6'>
        <div className='text-md exo2 hover:text-pink-100 text-pink-100/80 transition-all duration-200 cursor-pointer'><Menu></Menu></div>
         
       </div>

         {/*Mobile Nav */}
               <AnimatePresence>
                  {MenuOpen && ( 
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                     className="fixed inset-0  flex flex-col items-center justify-center bg-[#050205]/50 backdrop-blur-2xl z-100">  
                    
                    <div onClick={closeMenu} className='absolute top-4 right-6 cursor-pointer'> 
                      <X></X>
                    </div>
                   
                    <div className='flex flex-col gap-3'>
                      <a className='text-xl cursor-pointer'>Home</a>
                      <a className='text-xl cursor-pointer'>About</a>
                      <a className='text-xl cursor-pointer'>Community</a>
                      <a className='text-xl cursor-pointer'>Login</a>
                    </div>
                     

                    </motion.div>
                    
                  )}
               </AnimatePresence>
    </div>
  </nav>
    
}