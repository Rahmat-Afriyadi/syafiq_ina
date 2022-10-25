import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faChevronRight,faMap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import io from "socket.io-client"
import { useChannel } from "./AblyReactEffect";

let socket;

export default function Comment(){

    const router = useRouter()
    const kepada = router.query.to

    const [messages, setMessages] = useState([]); 
    const [present, setPresent] = useState(0);
    const [npresent, setNPresent] = useState(0);
    const [hesitant, setHesitant] = useState(0);

    // form
    const [receiver, setReceiver] = useState("Rahmat Afriyadi")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(0)

    const [channel, ably] = useChannel("chat", (message) => {
        setPresent(message.data.status.present)
        setNPresent(message.data.status.npresent)
        setHesitant(message.data.status.hesitant)
        setMessages(messages => ([message.data.comment, ...messages]))
    });

    function submitComment(){
        axios.post("/store", {
            name: receiver,
            comment: message,
            status: parseInt(status)
        })
        .then(function (response) {
            channel.publish({ name: "axios post", data: response.data })
            // socket.emit("input-change", response.data)
        })
        .catch(function (error) {
            console.log(error)
        });
    }   

    useEffect(function(){
        axios.get("/paginate?page=1&page_size=10").then(res=> {
            setMessages(res.data)
        })        
    },[])

    const socketInitializer = async () => {
        await fetch('/api/route');

        socket = io(window.location.origin)

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('update-input', msg => {
            setPresent(msg.status.present)
            setNPresent(msg.status.npresent)
            setHesitant(msg.status.hesitant)
            setMessages(messages => ([msg.comment, ...messages]))
        })
    }
        
    useEffect(()=>{
        if (kepada != null) {
            setReceiver(kepada)
        }
        // socketInitializer()
    },[])

    return (
        <div className='h-[1000px] w-11/12 rounded-lg mt-12 flex flex-col items-center shadow-lg relative pt-6 px-4'>
                <p className='font-bold mt-4 z-10 text-3xl font-monsieur'>Wishes</p>
                <p className='font-serif mt-2 z-10 text-md text-center px-12'>Berikan Ucapan Terbaik untuk kedua Mempelai</p>
                <div className=" w-full h-[750px] z-10 rounded-xl border-solid border-2 border-blue-200 mt-6 flex flex-col px-2 py-3">
                    <div className="flex w-full justify-center">
                        <p className="text-blue-600 font-bold"><FontAwesomeIcon icon={faEnvelopeOpen}/> 39 Ucapan</p>
                    </div>
                    <div className="flex w-full justify-center py-2 space-x-1">
                        <div className="w-20 h-12 pt-1 bg-blue-200 rounded-md text-green-600 font-bold hadir text-center">
                            <h3>{present}</h3>
                            <p className="text-[12px]">Hadir</p>
                        </div>
                        <div className="w-20 h-12 pt-1 bg-red-200 rounded-md text-red-600 font-bold hadir text-center">
                            <h3>{npresent}</h3>
                            <p className="text-[12px]">Tidak Hadir</p>
                        </div>
                        <div className="w-20 h-12 pt-1 bg-gray-200 rounded-md text-gray-600 font-bold hadir text-center">
                            <h3>{hesitant}</h3>
                            <p className="text-[12px]">Ragu</p>
                        </div>
                    </div>
                    
                    <div className="w-full justify-center my-3 px-4">
                        <hr className="w-full border-1 border-gray-300"/>
                        <input className="w-full my-2 border-solid border-2 rounded border-gray-400" value={receiver} disabled/>
                        <textarea className="w-full my-2 border-solid border-2 rounded border-gray-400" placeholder="Pesan" onChange={(e)=>{setMessage(e.target.value)}}/>
                        <select className="w-full my-2 py-2 border-solid border-2 rounded border-gray-400 text-gray-600" onChange={(e)=>{setStatus(e.target.value)}}>
                            <option>Pilih Konfirmasi Kehadiran:</option>
                            <option value={99}>Tidak Hadir</option>
                            <option value={1}>Hadir</option>
                            <option value={2}>Ragu</option>
                        </select>
                        <button className="mt-3 py-1 rounded w-40 text-center bg-blue-600 text-white font-bold text-sm" onClick={submitComment}><FontAwesomeIcon icon={faChevronRight}/> Kirim</button>
                    </div>

                    <div className="w-full my-5 px-4 overflow-auto" id="comment">
                        {
                            // messages.filter((element, index) => {
                            //     return messages.indexOf(element) === index;
                            // })
                            messages != null ?
                            messages.map((data, index) => 
                                (
                                    index <= 9 ?
                                    <div className="grid grid-cols-12 gap-2" key={index}>
                                        <div className="col-span-2">
                                            <p className="rounded-full bg-violet-800 py-2 text-white text-center">{data.presence.name.split(" ").map((n)=>n[0]).join("")}</p>
                                        </div>
                                        <div className="col-span-10">
                                            <h3 className="text-blue-600 font-bold" >{data.presence.name}</h3>
                                            <p className="text-sm text-gray-400">4/10/2022 10:54</p>
                                            <p className="text-sm" >{data.comment}</p>
                                        </div>
                                    </div>

                                    : ""
                                )
                            )
                            :""
                        }
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
                <Image src="/images/bg.jpg" layout='fill' className='rounded-xl' alt="bg"/>
            </div>
    )
}