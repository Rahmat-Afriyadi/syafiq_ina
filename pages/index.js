import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookOpen, faLeaf } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic';
import classnames from "classnames";
import { useRouter } from 'next/router'

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const Couple = dynamic(() => import('../components/Couple'), { ssr: false });
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: false });
const More = dynamic(() => import('../components/More'), { ssr: false });
const Jadwal = dynamic(() => import('../components/Jadwal'), { ssr: false });

export default function Home() {  


  const router = useRouter()
  const kepada = router.query.to

  const [load, setLoad] = useState(false)

  const cover_animate = {
    hidden: { 
      x: "100vw", 
      opacity: 0,
      transition: {
        duration:1,
      } },
    show: {
      x:0,    
      opacity:1,
      transition: {
        duration: .8,
      },  
    },    
  };

  const [muted, setMuted] = useState(true)
  const [audio, setAudio] = useState(null)
  
    useEffect(function(){
        if (audio != null) {
            audio.muted = false
            audio.play()            
        }

        function onScroll() {
          if (audio == null) {
            setAudio(new Audio("/music/song1.mp3"))          
            setMuted(false)  
          }  
        }

        document.body.addEventListener('click', onScroll, true); 
    // remove event on unmount to prevent a memory leak with the cleanup
        return () => document.body.removeEventListener('click', onScroll, true); 

    },[audio]);

 

  return (
    <>
      
    <div className={classnames('fixed top-0 w-full z-20', load? 'pointer-events-none': '')}>
          <motion.div
          variants={cover_animate}
          initial="hidden"
          animate={load ? "hidden" : "show"}
          className='w-full h-screen bg-black relative z-50 overflow-y-hidden flex flex-col items-center justify-center px-3'>
              <Image src="/images/bg.jpg" layout='fill' alt='cover' className='opacity-80'/>
            <p className='z-10 text-white text-xl font-bold mt-5 md:mt-2'>The Wedding Of</p>
            <div className='-mt-2'>
              <Image src="/images/main.png" width={350} height={286} alt='main' className='brightness-110' priority/>
            </div>

          <p className='z-10 text-3xl text-center px-3 font-qamila text-[#c904c0] scale-150 -mt-7'>Syafiq & Ina</p>
          <br></br>
            <p className='z-10 text-white text-lg text-center px-20 leading-6 mt-2 xl:mt-6'>Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <p className='z-10 text-white text-2xl font-bold text-center px-3 font-wedding'>{kepada}</p>
            <p className='z-10 text-slate-600 text-sm font-bold text-center px-3 mt-2'>*Mohon Maaf bila ada kesalahan penulisan nama dan gelar</p>
            <motion.div className='w-[170px] h-[39px] bg-[#048bc9] my-4 rounded-lg pl-3 flex items-center text-base text-white cursor-pointer z-10 pointer-events-auto'
                animate={{ scale: .9 }}
                transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: .8
                }}
                onClick={()=>{setLoad(true)}}
            >
                <FontAwesomeIcon icon={faBookOpen} className="fa-xl"/>
                &ensp; Buka Undangan
            </motion.div>
          </motion.div>
    </div>
      

      {
        load ?
      <>
      <div className='w-full flex flex-col items-center overflow-x-hidden'> 
        {/* <div className='h-20 w-20 bg-black z-20 cursor-pointer' onClick={testWS}></div> */}
        <div className='h-[40px] text-center text-2xl' id='home'>Reception &nbsp; <FontAwesomeIcon icon={faLeaf}/> &nbsp; Invitation</div>
        <Navbar/>
        <Hero audio={audio}/>
        <Couple/>
        <Gallery/>
        <Jadwal/>
        <More/>
      </div>

      </>
       :
       ""
         }
          
    </>
  )
}

