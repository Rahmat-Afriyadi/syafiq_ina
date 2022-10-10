import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClose, faCopy, faGift, faLeaf } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import Navbar from '../components/navbar'
import Hero from '../components/Hero';
import Jadwal from '../components/Jadwal';
import More from '../components/More';


export default function Home() {
  
  const [load, setLoad] = useState(true)

    const yoyo = {
    initial: {
      scale: .9,
    },
    animate: {
      scale: 1
    },
    transition: {
      yoyo: 2,
      repeat: Infinity
    },
  };
 

  return (
    <>
      {/* <div className='w-full h-screen bg-black relative z-30'>
        <Image src="/images/bg.jpg" layout='fill'/>
      </div> */}

      {
        load ?
      <>
      <div className='w-full flex flex-col items-center overflow-x-hidden'>
        <div className='h-[40px] text-center text-2xl' id='home'>Reception &nbsp; <FontAwesomeIcon icon={faLeaf}/> &nbsp; Invitation</div>
        <Navbar/>
        <Hero/>
        <div className="h-screen w-full md:w-11/12 lg:w-6/12 xl:w-4/12 relative z-10 rounded-xl -mt-2">
          <Image className='rounded-3xl' src="/images/belakang2.png" layout='fill' />
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

