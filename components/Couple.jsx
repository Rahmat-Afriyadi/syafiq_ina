import Image from "next/image"

export default function Couple(){
    return (
        <div className="h-[1050px] w-full sm:w-[540px] relative xl:w-4/12  z-10 rounded-xl -mt-2 flex flex-col items-center opacity-85" id='couple'>
          <br></br><br></br>
          <p className='font-monsieur z-10 mt-24 md:mt-20 text-2xl text-black'>Assalamualaikum Wr. Wb</p>
          <p className='font-serif z-10 text-center px-24 mt-3 text-sm'>Kami bermaksud untuk menyelenggarakan acara pernikahan putra-putri kami:</p>
          <div className="mt-0 sm:mt-7">
            <Image className='z-10 scale-75 sm:scale-100' width={180} height={180} src="/images/clipsyafiq.png" alt='couple'/>
          </div>
          <p className='font-qamila z-10 drop-shadow-lg shadow-pink-500 text-2xl font-medium text-[#d106b2] -mt-3 sm:mt-2'>Abu Syafiq Arridho S.M</p>
          <p className='font-serif z-10 drop-shadow-lg shadow-pink-500 px-16 text-center mt-2 sm:mt-5 text-sm'>Putra Pertama dari Ibu Jusmiati S.Ag</p>
          <p className='font-serif z-10 drop-shadow-lg shadow-pink-500 px-24 text-center text-sm'>& Bpk. Suyadi S.Ag M.M</p>
          <p className='font-monsieur font-extrabold z-10 text-3xl text-[#d106b2] mt-4 sm:mt-7'>&</p>
          <div className="sm:mt-6">
            <Image className='z-10 scale-75 sm:scale-100' width={180} height={180} src="/images/clipina.png" alt='couple'/>
          </div>
          <p className='font-qamila z-10 drop-shadow-lg shadow-pink-500 text-2xl font-medium text-[#d106b2] -mt-3 sm:mt-2'>Ina Amanda</p>
          <p className='font-serif z-10 drop-shadow-lg shadow-pink-500 text-sm px-16 text-center mt-2 sm:mt-5'>Putri Pertama dari Ibu Arnasih</p>
          <p className='font-serif z-10 drop-shadow-lg shadow-pink-500 text-sm px-20 text-center'>& Bpk. Aruman (Alm)</p>
          <Image className='rounded-3xl' src="/images/belakang5.png" layout='fill' alt='couple'/>
        </div>
    )
}