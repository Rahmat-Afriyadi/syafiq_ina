import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClose, faClover, faCopy, faFileSignature, faGift, faHome, faLeaf, faPeopleGroup, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import { motion } from "framer-motion";
import { Link } from "react-scroll";


export default function Home() {

  const [audio, setAudio] = useState(null)
  const [muted, setMuted] = useState(true)

  const [newTime, setNewTime] = useState(0)
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showRekening, setShowRekening] = useState(false);
  const [copied , setCopied] = useState(false);
  const [load, setLoad] = useState(true)

  let countDownDate = new Date("12-04-2022 08:00:00").getTime();

  useEffect(function() { 
    
    setAudio(new Audio("/music/song.mp3")) 
        
    setCopied(false)

     var updateTime = setInterval(() => {
      var now = new Date().getTime();
      console.log(new Date().getTime())

      var difference = countDownDate - now;
      // difference = 0

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);


      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    })

    return () => {
      clearInterval(updateTime);
    }
  }, [])

  function turnAudio(){
    if (audio.paused) {
      setMuted(false)
      audio.play()
    }else {
      setMuted(true)
      audio.pause()
    }
  }

  const modal_animate = {
      hidden: { y: "100vh" },
      show: {
        y:70
      },
      transition: {
        duration: 3,
      },
    };

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

  function copyClipBoard()
  {
    navigator.clipboard.writeText("6610706647")
    setCopied(true)
  }

  function handleShowModal()
  {
    setShowModal(true)    
    setCopied(false)
  }

  return (
    <>
      {/* <div className='w-full h-screen bg-black relative z-30'>
        <Image src="/images/bg.jpg" layout='fill'/>
      </div> */}

      {
        load ?
      <>
        <div className='h-[40px] w-full text-center flex items-center justify-center text-2xl' id='home'>Reception &nbsp; <FontAwesomeIcon icon={faLeaf}/> &nbsp; Invitation</div>
        <div className='h-auto w-full py-5 text-center fixed flex justify-center items-center bottom-0 z-20'>
          <div className='w-[260px] h-auto bg-purple-400 flex justify-between py-1 px-2 rounded-lg'>
            <Link to="home"
              smooth={true} className='h-10 w-10 bg-red-200 rounded-md hover:bg-gray-800 flex items-center justify-center'>
              <FontAwesomeIcon icon={faHome} style={{fontSize:25, color:"salmon"}}/>
            </Link>
            <Link
            to='calendar'
            smooth={true}
            className='h-10 w-10 bg-red-200 rounded-md hover:bg-gray-800 flex items-center justify-center'>
              <FontAwesomeIcon icon={faCalendar} style={{fontSize:25, color:"salmon"}}/>
            </Link>
            <div className='h-10 w-10 bg-red-200 rounded-md hover:bg-gray-800 flex items-center justify-center'>
              <FontAwesomeIcon icon={faClover} style={{fontSize:25, color:"salmon"}}/>
            </div>
            <div className='h-10 w-10 bg-red-200 rounded-md hover:bg-gray-800 flex items-center justify-center'>
              <FontAwesomeIcon icon={faFileSignature} style={{fontSize:25, color:"salmon"}}/>
            </div>
            <Link to="gift"
              smooth={true} className='h-10 w-10 bg-red-200 rounded-md hover:bg-gray-800 flex items-center justify-center'>
              <FontAwesomeIcon icon={faGift} style={{fontSize:25, color:"salmon"}}/>
            </Link>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col items-center'>
          <div className='h-screen w-[420px] relative'>
            <Image className='rounded-3xl' src="/images/depan1.png" layout='fill'
            />
            <button className='w-9 h-9 bg-green-300 fixed bottom-24 ml-[370px] rounded-full z-20' onClick={turnAudio}>
                <FontAwesomeIcon icon={muted ? faVolumeMute: faVolumeUp} style={{ fontSize: 20, color: "green" }}/>
            </button>
          </div>
          <div className="h-screen w-[420px] relative z-10 px-24 rounded-xl -mt-2">
            <Image className='rounded-3xl' src="/images/belakang2.png" layout='fill' />
          </div>

          {/* jadwal */}
          <div className="h-screen w-[420px] relative rounded-xl text-center flex flex-col items-center justify-center" id="calendar">
            <p className='text-2xl font-bold z-10 mt-14'>Minggu, 04 Desember 2022</p>
            <p className='text-lg z-10 mt-2'>Pukul: 08:00</p>
            <div className='w-[320px] h-20 z-10 flex justify-evenly items-center mt-10'>
              <div className='w-16 h-14 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{days < 10 ? "0"+days: days}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Hari</p>
              </div>
              <div className='w-16 h-14 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{hours < 10 ? "0"+hours: hours}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Jam</p>
              </div>
              <div className='w-16 h-14 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{minutes < 10 ? "0"+minutes: minutes}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Menit</p>
              </div>
              <div className='w-16 h-14 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{seconds < 10 ? "0"+seconds: seconds}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Detik</p>
              </div>
            </div>
            <div className='w-[390px] z-10 mt-10'>
              <p className='text-2xl text-center'>QS. Ar-Rum Ayat 21</p>
              <br></br>
              <p className='text-lg text-center'>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
            </div>            
            <Image className='rounded-3xl' src="/images/bg.png" layout='fill'/>
          </div>

          <div className='h-screen w-[420px] bg-yellow-100 mt-2 flex justify-center rounded-xl' id='gift'>
            <div className='h-[300px] w-[390px] rounded-lg mt-12 flex flex-col items-center px-5 shadow-lg relative'>
              <div className='text-xl mt-9 z-10'>
                <FontAwesomeIcon icon={faGift} className="fa-2xl scale-125"/>
              </div>
              <p className='font-bold text-xl mt-7 z-10'>Kirim Hadiah</p>
              <p className='mt-3 text-base text-center leading-4 z-10'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
              <motion.div className='w-[170px] h-[39px] bg-gray-500 mt-5 rounded-lg pl-3 flex items-center text-base text-white cursor-pointer z-10'
                animate={{ scale: .9 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: .8
                }}
                onClick={handleShowModal}
              >
                <FontAwesomeIcon icon={faGift} className="fa-xl"/>
                &ensp; Amplop Digital
              </motion.div>
              <Image src="/images/bg.jpg" layout='fill' className='rounded-xl'/>
            </div>
          </div>
          <motion.div className='w-[420px] h-[600px] bg-gray-50 rounded-3xl rounded-b-none flex flex-col items-center fixed z-20 bottom-0 left-auto right-auto' 
              variants={modal_animate}
              initial="hidden"
              animate={showModal ? "show" : "hidden"}>
            <div className='w-[420px] h-[40px] bg-slate-700 rounded-3xl rounded-b-none text-white text-2xl text-bold'>
              <FontAwesomeIcon icon={faClose} className="ml-96 mt-2 cursor-pointer" onClick={()=>{setShowModal(false)}}/>
            </div>
            <div className='w-[400px] h-[57px] bg-gray-300 rounded-xl mt-3 text-center'>
              <p className='text-base p-1'>Silahkan transfer hadiah melalui nomor rekening maupun dompet digital berikut :</p>
            </div>
            <div className='w-[400px] h-[45px] bg-gray-300 rounded-xl mt-3 px-5 flex items-center cursor-pointer' onClick={ () => showRekening ? setShowRekening(false): setShowRekening(true)}>
              <p className='text-lg p-1 font-bold'><FontAwesomeIcon icon={faGift}/> &ensp; Rekening</p>
            </div>
            {
              showRekening? 
                <div className='w-[400px] h-[200px] bg-gray-700 mt-3 rounded-3xl relative shadow-yellow-100 shadow-sm fill'>
                <img className='rounded-3xl' src="/images/card.jpg" layout='fill' alt='card'/>
                <p className='text-xl absolute font-bold left-10 bottom-16 opacity-50'>6610706647</p>
                <p className='text-xl absolute font-bold left-10 bottom-10 opacity-50'>ABU SYAFIQ ARRIDHO</p>
                <div
                onClick={copyClipBoard} 
                className='w-[95px] h-[30px] bg-slate-600 absolute bottom-4 right-5 rounded-lg opacity-50 flex items-center pl-3 text-white font-bold cursor-pointer hover:bg-slate-800'>
                  <FontAwesomeIcon icon={faCopy} /> &nbsp; 
                  {
                    copied ?
                    <p>Copied</p> 
                    : <p>Copy</p>
                  }
                </div>
              </div>
              : ""
            }
            
            {/* <div className='w-[400px] h-[45px] bg-gray-300 rounded-xl mt-3 px-5 flex items-center cursor-pointer'>
              <p className='text-lg p-1 font-bold'><FontAwesomeIcon icon={faGift}/> &ensp; Rekening</p>
            </div> */}
          </motion.div>
        </div>    
      </>
      :
      ""
        }
          
    </>
  )
}

