
import { faVolumeUp,faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero({audio})
{
    const [muted, setMuted] = useState(false)

    useEffect(function(){
        if (audio != null) {
            audio.muted = false
            audio.play()            
        }
    },[audio]);

    function turnAudio(){
        if (audio.paused) {
            setMuted(false)
            audio.play()
        }else {
            setMuted(true)
            audio.pause()
        }
    }

    return (
        <div className='h-screen w-full sm:w-[540px] md:w-[700px] xl:w-4/12 relative flex flex-col items-end justify-center px-3'>
            <Image className='rounded-3xl' src="/images/depan8.png" layout='fill' alt="cover_hero" />
            <p className="ml-auto mr-auto mt-6 text-xl font-bold z-10">The Wedding Of</p>
            <div className="ml-auto mr-auto -mt-8 md:mt-3 lg:-mt-8 md:scale-150 lg:scale-100 flex flex-col justify-center items-center">
                <Image src="/images/main.png" width={350} height={350} className="z-10 " alt="main" priority/>
            </div>
                <p className='ml-auto mr-auto z-10 text-3xl text-center px-3 font-qamila text-[#d106b2] scale-150 -mt-12 md:mt-1 lg:-mt-12'>Syafiq & Ina</p>
                <br></br>
                <br></br>
                <p className="ml-auto mr-auto text-base z-10 md:-mt-3">Minggu, 04 Desember 2022</p>
            <button className='w-9 h-9 bg-green-300 fixed bottom-24 rounded-full z-20 opacity-80' onClick={turnAudio}>
                <FontAwesomeIcon icon={muted ? faVolumeMute: faVolumeUp} style={{ fontSize: 20, color: "green" }}/>
            </button>
        </div>
    )
}