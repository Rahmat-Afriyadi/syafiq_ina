import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { faGift, faClose, faCopy, faCreditCard, faMapLocation, faMap, faMessage, faEnvelopeOpen, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function More(){

    const [showModal, setShowModal] = useState(false);
    const [copied , setCopied] = useState(false);
    const [showRekening, setShowRekening] = useState(true);    
    const [showAlamat, setShowAlamat] = useState(true);    

    function handleShowModal()
    {
        setShowModal(true)    
        setCopied(false)
        setShowRekening(true)
        setShowAlamat(false)
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

    function handleRekening()
    {
        setShowAlamat(false)
        if (showRekening) {
            setShowRekening(false)
        }else {
            setShowRekening(true)
        }
    }
    function handleAlamat()
    {
        setShowRekening(false)
        if (showAlamat) {
            setShowAlamat(false)
        }else {
            setShowAlamat(true)
        }
    }

    return (
        <div className='h-auto w-full sm:w-[540px] xl:w-4/12 bg-yellow-100 mt-2 flex flex-col items-center rounded-2xl pt-3 pb-11'>
            <div className='h-[1000px] w-11/12 rounded-lg mt-12 flex flex-col items-center shadow-lg relative pt-6 px-4'>
                <p className='font-bold mt-4 z-10 text-3xl font-monsieur'>Wishes</p>
                <p className='font-serif mt-2 z-10 text-md text-center px-12'>Berikan Ucapan Terbaik untuk kedua Mempelai</p>
                <div className=" w-full h-[750px] z-10 rounded-xl border-solid border-2 border-blue-200 mt-6 flex flex-col px-2 py-3">
                    <div className="flex w-full justify-center">
                        <p className="text-blue-600 font-bold"><FontAwesomeIcon icon={faEnvelopeOpen}/> 39 Ucapan</p>
                    </div>
                    <div className="flex w-full justify-center py-2 space-x-1">
                        <div className="w-20 h-12 pt-1 bg-blue-200 rounded-md text-green-600 font-bold hadir text-center">
                            <h3>40</h3>
                            <p className="text-[12px]">Hadir</p>
                        </div>
                        <div className="w-20 h-12 pt-1 bg-red-200 rounded-md text-red-600 font-bold hadir text-center">
                            <h3>40</h3>
                            <p className="text-[12px]">Tidak Hadir</p>
                        </div>
                        <div className="w-20 h-12 pt-1 bg-gray-200 rounded-md text-gray-600 font-bold hadir text-center">
                            <h3>40</h3>
                            <p className="text-[12px]">Ragu</p>
                        </div>
                    </div>
                    
                    <div className="w-full justify-center my-3 px-5">
                        <hr className="w-full border-1 border-gray-300"/>
                        <input className="w-full my-2 border-solid border-2 rounded border-gray-400" value="Rahmat"/>
                        <textarea className="w-full my-2 border-solid border-2 rounded border-gray-400" placeholder="Pesan"/>
                        <select className="w-full my-2 py-2 border-solid border-2 rounded border-gray-400 text-gray-600">
                            <option>Pilih Konfirmasi Kehadiran:</option>
                            <option>Hadir</option>
                            <option>Tidak Hadir</option>
                            <option>Ragu</option>
                        </select>
                        <button type="submit" className="mt-3 py-1 rounded w-40 text-center bg-blue-600 text-white font-bold text-sm"><FontAwesomeIcon icon={faChevronRight}/> Kirim</button>
                    </div>

                    <div className="w-full my-5 px-5 overflow-auto" id="comment">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-2">
                                <p className="rounded-full bg-violet-800 py-2 text-white text-center">M</p>
                            </div>
                            <div className="col-span-10">
                                <h3 className="text-blue-600 font-bold">Nama</h3>
                                <p className="text-sm text-gray-400">4/10/2022 10:54</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque at commodi debitis minima aspernatur aliquid maxime minus, dolor atque, consequuntur assumenda aperiam inventore laboriosam cum, voluptatem eum illum necessitatibus.</p>
                            </div>

                            <div className="col-span-2">
                                <p className="rounded-full bg-violet-800 py-2 text-white text-center">M</p>
                            </div>
                            <div className="col-span-10">
                                <h3 className="text-blue-600 font-bold">Nama</h3>
                                <p className="text-sm text-gray-400">4/10/2022 10:54</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque at commodi debitis minima aspernatur aliquid maxime minus, dolor atque, consequuntur assumenda aperiam inventore laboriosam cum, voluptatem eum illum necessitatibus.</p>
                            </div>
                            
                            <div className="col-span-2">
                                <p className="rounded-full bg-violet-800 py-2 text-white text-center">M</p>
                            </div>
                            <div className="col-span-10">
                                <h3 className="text-blue-600 font-bold">Nama</h3>
                                <p className="text-sm text-gray-400">4/10/2022 10:54</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque at commodi debitis minima aspernatur aliquid maxime minus, dolor atque, consequuntur assumenda aperiam inventore laboriosam cum, voluptatem eum illum necessitatibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div className='w-[170px] h-[39px] bg-gray-500 mt-5 rounded-lg pl-3 flex items-center text-base text-white cursor-pointer z-10'
                    animate={{ scale: .9 }}
                    transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: .8
                    }}
                >
                    <a href="https://goo.gl/maps/1QRSyAexsJyXGRdJ9" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMap} className="fa-xl"/>
                        &ensp; Lihat Alamat
                    </a>
                </motion.div>
                <Image src="/images/bg.jpg" layout='fill' className='rounded-xl' alt="bg" priority/>
            </div>
            <div className='h-[500px] w-11/12 rounded-lg mt-12 flex flex-col items-center px-5 shadow-lg relative'>
                <div className='text-xl mt-9 z-10'>
                    <FontAwesomeIcon icon={faMapLocation} className="fa-2xl"/>
                </div>
                <p className='font-bold font-qamila mt-4 z-10 text-3xl'>Detail Acara</p>
                <p className='font-serif mt-2 z-10 text-2xl'>Minggu</p>
                <p className='font-mono mt-4 z-10 text-3xl font-bold tanggal'>04</p>
                <p className='font-serif mt-4 z-10 text-3xl font-semibold'>Desember 2022</p>
                <p className='font-mono z-10 text-base'>PUKUL 11.00 WIB - SELESAI</p>
                <p className='font-serif mt-4 z-10 text-3xl font-semibold'>Lokasi Acara </p>
                <p className='text-base text-center leading-4 z-10'>Jl. Warujaya Kp. Sugutamu No.1 Rt. 02/ Rw. 022 Depok 2 Tengah 16411</p>
                <motion.div className='w-[170px] h-[39px] bg-gray-500 mt-5 rounded-lg pl-3 flex items-center text-base text-white cursor-pointer z-10'
                    animate={{ scale: .9 }}
                    transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: .8
                    }}
                >
                    <a href="https://goo.gl/maps/1QRSyAexsJyXGRdJ9" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMap} className="fa-xl"/>
                        &ensp; Lihat Alamat
                    </a>
                </motion.div>
                <Image src="/images/bg.jpg" layout='fill' className='rounded-xl' alt="bg" priority/>
            </div>

            
            <div className='h-[300px] w-11/12 rounded-lg mt-12 flex flex-col items-center px-5 shadow-lg relative' id='gift'>
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
                <Image src="/images/bg.jpg" layout='fill' className='rounded-xl' alt="bg" priority/>
            </div>

            <br></br>

            <p className="text-center px-10 mt-4">
                Atas kehadiran dan do’a restu dari bapak/ibu/saudara/I sekalian, kami mengucapkan Terima Kasih.
            </p>

            <p className="text-center px-10 text-3xl font-monsieur font-medium mt-12">
                Wassalamualaikum Wr. Wb.
            </p>
<br></br>
            <Image src="/images/main.png" height={300} width={300} alt="main" priority/>

            <p className="text-center px-10 font-serif">
                Kami yang Berbahagia.
            </p>
<br></br>
            <p className="text-center px-10 text-3xl font-qamila font-bold text-[#d106b2] scale-125">
                Syafiq & Ina
            </p>
            

            {/* modal hadiah */}
            <motion.div className='w-full sm:w-[540px] xl:w-4/12 h-[600px] bg-gray-50 rounded-3xl rounded-b-none flex flex-col items-center fixed z-20 bottom-0 left-auto right-auto ' 
              variants={modal_animate}
              initial="hidden"
              animate={showModal ? "show" : "hidden"}>
                <div className='w-full h-[43px] bg-slate-700 rounded-3xl rounded-b-none text-white text-2xl text-bold'>
                    <FontAwesomeIcon icon={faClose} className="absolute mt-2 right-8 cursor-pointer" onClick={()=>{setShowModal(false)}}/>
                </div>
                <div className='w-5/6 h-auto bg-gray-300 rounded-xl mt-5 text-center py-1 px-1'>
                    <p className='text-base p-1'>Silahkan transfer hadiah melalui nomor rekening maupun dompet digital berikut :</p>
                </div>
                <div className='w-5/6 h-auto bg-gray-300 rounded-xl mt-5 px-5 flex items-center cursor-pointer py-1' onClick={handleRekening}>
                <p className='text-lg p-1 font-bold'><FontAwesomeIcon icon={faCreditCard}/> &ensp; Rekening</p>
                </div>
                {
                showRekening? 
                    <div className='w-5/6 h-[200px] bg-gray-700 mt-3 rounded-3xl relative shadow-yellow-100 shadow-sm fill'>
                        <Image className='rounded-3xl' src="/images/card.jpg" layout='fill' alt='card'/>
                        <p className='text-xl absolute font-bold left-10 bottom-16 opacity-50'>6610706647</p>
                        <p className='text-xl absolute font-bold left-10 bottom-10 opacity-50'>ABU SYAFIQ ARRIDHO</p>
                        <div
                        onClick={copyClipBoard} 
                        className='w-[80px] h-[23px] mt-2 sm:w-[95px] sm:h-[30px] bg-slate-600 absolute bottom-3 right-5 rounded-lg opacity-50 flex items-center pl-3 text-white font-bold cursor-pointer hover:bg-slate-800'>
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
                <div className='w-5/6 h-auto bg-gray-300 rounded-xl mt-5 px-5 flex items-center cursor-pointer py-1' onClick={handleAlamat}>
                <p className='text-lg p-1 font-bold'><FontAwesomeIcon icon={faGift}/> &ensp; Kirim Hadiah</p>
                </div>
                {
                    showAlamat?
                    <div className='w-5/6 h-[100px] bg-gray-300 mt-3 rounded-3xl relative shadow-yellow-100 shadow-sm fill px-8 flex items-center justify-center text-center'>
                        Jl. Warujaya Kp. Sugutamu No.1
                        Rt. 02/ Rw. 022 Depok 2 Tengah
                        16411 - 089505098039
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