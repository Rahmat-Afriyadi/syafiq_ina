import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { faGift, faClose, faCopy } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function More(){

    const [showModal, setShowModal] = useState(false);
    const [copied , setCopied] = useState(false);
    const [showRekening, setShowRekening] = useState(false);    

    function handleShowModal()
    {
        setShowModal(true)    
        setCopied(false)
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

    function copyClipBoard()
    {
      navigator.clipboard.writeText("6610706647")
      setCopied(true)
    }

    return (
        <div className='h-screen w-full sm:w-[540px] xl:w-4/12 bg-yellow-100 mt-2 flex justify-center rounded-2xl' id='gift'>
            <div className='h-[300px] w-11/12 rounded-lg mt-12 flex flex-col items-center px-5 shadow-lg relative'>
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

            {/* modal hadiah */}
            <motion.div className='w-full sm:w-[540px] xl:w-4/12 h-[600px] bg-gray-50 rounded-3xl rounded-b-none flex flex-col items-center fixed z-20 bottom-0 left-auto right-auto' 
              variants={modal_animate}
              initial="hidden"
              animate={showModal ? "show" : "hidden"}>
                <div className='w-full h-[40px] bg-slate-700 rounded-3xl rounded-b-none text-white text-2xl text-bold'>
                    <FontAwesomeIcon icon={faClose} className="absolute mt-2 right-8 cursor-pointer" onClick={()=>{setShowModal(false)}}/>
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
    )
}