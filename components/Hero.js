
import { faVolumeUp,faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero()
{
    const [muted, setMuted] = useState(true)
    const [audio, setAudio] = useState(null)

    useEffect(function(){
        setAudio(new Audio("/music/song.mp3")) 
    },[]);

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
        <div className='h-screen w-full md:w-11/12 lg:w-6/12 xl:w-4/12 relative'>
            <Image className='rounded-3xl' src="/images/depan1.png" layout='fill'
            />
            <button className='w-9 h-9 bg-green-300 fixed bottom-24 ml-[370px] rounded-full z-20' onClick={turnAudio}>
                <FontAwesomeIcon icon={muted ? faVolumeMute: faVolumeUp} style={{ fontSize: 20, color: "green" }}/>
            </button>
        </div>
    )
}