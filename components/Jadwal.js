import { useState, useEffect } from "react";
import Image from "next/image";

export default function Jadwal(){

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let countDownDate = new Date("12-04-2022 08:00:00").getTime();

    useEffect(function() { 
    
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
    }, [countDownDate])

    return (
        <div className="h-screen w-full sm:w-[540px] xl:w-4/12 relative rounded-xl text-center flex flex-col items-center justify-center px-4 pb-3" id="calendar">
            <p className='text-2xl font-bold z-10 mt-10 px-2'>Minggu, 04 Desember 2022</p>
            <p className='text-lg z-10 mt-2'>Pukul: 08:00</p>
            <div className='w-[320px] h-20 z-10 flex justify-evenly items-center mt-10'>
            <div className='w-16 h-16 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{days < 10 ? "0"+days: days}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Hari</p>
            </div>
            <div className='w-16 h-16 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{hours < 10 ? "0"+hours: hours}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Jam</p>
            </div>
            <div className='w-16 h-16 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{minutes < 10 ? "0"+minutes: minutes}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Menit</p>
            </div>
            <div className='w-16 h-16 bg-yellow-100 opacity-75 shadow-md rounded-lg flex flex-col items-center justify-center'>
                <p className='text-4xl text-yellow-600 font-semibold'>{seconds < 10 ? "0"+seconds: seconds}</p>
                <p className='text-lg -mt-2 text-slate-800 opacity-75'>Detik</p>
            </div>
            </div>
            <div className='w-full z-10 mt-10 px-3 pb-3'>
                <p className='text-2xl text-center'>QS. Ar-Rum Ayat 21</p>
                <br></br>
                <p className='text-lg text-center'>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
            </div>            
            <Image className='rounded-3xl' src="/images/bg.png" layout='fill' alt="bg"/>
        </div>
    )
}