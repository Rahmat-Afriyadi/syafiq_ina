
import { faVolumeUp,faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero()
{
    const [muted, setMuted] = useState(true)
    const [audio, setAudio] = useState(null)

    const onScroll = function(){
        console.log("test")
        if (audio == null) {
            console.log("masuk sini")
            setAudio(new Audio("/music/song.mp3"))          
            setMuted(false)  
        }            
    }

    useEffect(function(){
        window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
        return () => window.removeEventListener("scroll", onScroll, { passive: true });
    },[audio]);

    useEffect(function(){
        if (audio != null) {
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
        <div className='h-screen w-full sm:w-[540px] xl:w-4/12 relative flex flex-col items-end px-3'>
            <Image className='rounded-3xl' src="/images/depan3.png" layout='fill' alt="cover_hero" />
            <div className="ml-auto mr-auto mb-auto mt-36">
                <Image src="/images/main.png" width={350} height={350} className="z-10" alt="main"/>
            </div>
            <button className='w-9 h-9 bg-green-300 fixed bottom-24 rounded-full z-20 opacity-80' onClick={turnAudio}>
                <FontAwesomeIcon icon={muted ? faVolumeMute: faVolumeUp} style={{ fontSize: 20, color: "green" }}/>
            </button>
        </div>
    )
}