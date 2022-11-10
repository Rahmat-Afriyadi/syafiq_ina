import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

export default function LoveStory()
{
    return (
        <div className="h-[700px] w-full sm:w-[540px] xl:w-4/12 relative rounded-xl text-center flex flex-col items-center justify-center px-5 pb-3 mt-5" id="calendar">
            <div className="flex flex-col z-10 w-full">
                <p className="font-qamila text-[#048bc9] text-3xl my-2">Love Story</p>
                <div className="w-full my-4 border-l-4 border-[#048bc9] pl-6 pr-1 relative">

                    {/* biji biji terbang */}
                    <div className="h-6 w-6 bg-[#048bc9] z-10 absolute -left-3 top-0 rounded-full">
                    </div>
                    
                    <div className="h-6 w-6 bg-[#048bc9] z-10 absolute -left-3 bottom-0 rounded-full">
                    </div>
                    {/* akhir biji biji terbang */}


                        <p className="text-2xl text-[#048bc9] text-left font-sans font-medium">01 okt 2015</p>
                        <div className="bg-[#048bc9] px-4 py-3 w-full rounded-lg mt-2">
                            <p className="text-yellow-50 text-left mb-3">Awal Bertemu</p>
                            <div className="aspect-video bg-black relative rounded-xl">
                                <Image src="/images/gallery/2.jpeg" layout='fill' className='rounded-xl' alt="bg"/>
                            </div>
                        </div>
                        <br></br>
                        <p className="text-2xl text-[#048bc9] text-left font-sans font-medium relative">02 okt 2022
                        <div className="h-10 w-10 border-4 border-[#048bc9] bg-yellow-50 z-10 
                                absolute -left-5 -ml-[25px] top-0 rounded-full text-center flex items-center justify-center text-[#048bc9]">
                                <div className='text-xl z-10'>
                                    <FontAwesomeIcon icon={faHeart} className="fa-2xl scale-50"/>
                                </div>
                            </div>
                        </p>
                        <div className="bg-[#048bc9] px-4 py-3 w-full rounded-lg mt-2">
                            <p className="text-yellow-50 text-left mb-3">Lamaran</p>
                            <div className="aspect-video bg-black rounded-xl relative">
                                <Image src="/images/gallery/1.jpeg" layout='fill' className='rounded-xl' alt="bg"/>
                            </div>
                        
                    </div>
                </div>
            </div>
            <Image className='rounded-3xl' src="/images/bg.jpg" layout='fill' alt="bg" priority/>
        </div>
    )
}