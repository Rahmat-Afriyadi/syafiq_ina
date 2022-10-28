import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMap, faMapLocation } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DetailAcara(){
    return (
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
                <motion.div className='w-[170px] h-[39px] bg-[#048bc9] mt-5 rounded-lg pl-3 flex items-center text-base text-white cursor-pointer z-10'
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
                <Image src="/images/bg.jpg" layout='fill' className='rounded-xl' alt="bg"/>
            </div>
    )
}