import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookOpen, faClose, faCopy, faGift, faLeaf } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Jadwal from '../components/Jadwal';
import More from '../components/More';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Couple from '../components/Couple'


export default function Home() {

      const router = useRouter()
      const kepada = router.query.to

  
  const [load, setLoad] = useState(false)

  const cover_animate = {
    hidden: { 
      x: "100vw", 
      opacity: 0,
      transition: {
        duration:1
      } },
    show: {
      x:0,    
      opacity:1,
      transition: {
        type: "tween",
        duration: .8,
      },  
    },    
  };

  const [muted, setMuted] = useState(true)
    const [audio, setAudio] = useState(null)

    const onScroll = function(){
        console.log("test")
        if (audio == null) {
            console.log("masuk sini")
            setAudio(new Audio("/music/song1.mp3"))          
            setMuted(false)  
        }            
    }

    useEffect(function(){
        document.body.addEventListener('click', onScroll, true); 
    // remove event on unmount to prevent a memory leak with the cleanup
        return () => document.body.removeEventListener('click', onScroll, true); 
    },[audio]);

    useEffect(function(){
        if (audio != null) {
            audio.muted = false
            audio.play()            
        }
    },[audio]);

  return (
    <>
    

      <Head>
        <link href="http://fonts.cdnfonts.com/css/qamila" rel="stylesheet"></link>
    </Head>


    
    <div className='fixed top-0 w-full z-10'>
          <motion.div
          variants={cover_animate}
          initial="hidden"
          animate={load ? "hidden" : "show"}
          className='w-full h-screen bg-black relative z-50 overflow-y-hidden flex flex-col items-center justify-center px-3 '>
              <Image src="/images/bg.jpg" layout='fill' alt='cover' className='opacity-80'/>
            <p className='z-10 text-white text-xl font-bold'>The Wedding Of</p>
            <Image src="/images/main.png" width={350} height={350} alt='main' className='brightness-110'/>

          <p className='z-10 text-3xl text-center px-3 font-qamila text-pink-500 scale-150 -mt-10'>Ina & Syafiq</p>
          <br></br>
            <p className='z-10 text-white text-xl text-center'>Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <br></br>
            <p className='z-10 text-white text-2xl font-bold text-center px-3 font-wedding'>{kepada}</p>
            <br></br>
            <p className='z-10 text-slate-600 text-sm font-bold text-center px-3'>*Mohon Maaf bila ada kesalahan penulisan nama dan gelar</p>
            <motion.div className='w-[170px] h-[39px] bg-gray-500 mt-5 rounded-lg pl-3 flex items-center text-base text-white cursor-pointer z-10'
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
        <div className='h-[40px] text-center text-2xl' id='home'>Reception &nbsp; <FontAwesomeIcon icon={faLeaf}/> &nbsp; Invitation</div>
        <Navbar/>
        <Hero audio={audio}/>
        <Couple/>
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

