import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClose, faCopy, faGift, faLeaf } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Jadwal from '../components/Jadwal';
import More from '../components/More';


export default function Home() {

  
  const [load, setLoad] = useState(true)

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", event => {
      const audio = document.querySelector("audio");
      audio.volume = 0.2;
      audio.play();
    });
  },[])
 

  return (
    <>
      {/* <div className='w-full h-screen bg-black relative z-30 overflow-y-hidden'>
        <Image src="/images/bg.jpg" layout='fill'/>
      </div> */}

      {
        load ?
      <>
      <div className='w-full flex flex-col items-center overflow-x-hidden overflow-y-hidden'> 
        <div className='h-[40px] text-center text-2xl' id='home'>Reception &nbsp; <FontAwesomeIcon icon={faLeaf}/> &nbsp; Invitation</div>
        <Navbar/>
        <Hero/>
        <div className="h-screen w-full sm:w-[540px] xl:w-4/12 relative z-10 rounded-xl -mt-2">
          <Image className='rounded-3xl' src="/images/belakang3.png" layout='fill' alt='couple'/>
        </div>
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

