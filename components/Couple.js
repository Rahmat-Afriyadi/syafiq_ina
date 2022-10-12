import Image from "next/image"

export default function Couple(){
    return (
        <div className="h-[1050px] w-full sm:w-[540px] relative xl:w-4/12  z-10 rounded-xl -mt-2 flex flex-col items-center opacity-90" id='couple'>
          <p className='font-qamila z-10 mt-32 md:mt-28 text-xl text-slate-700'>Assalamualaikum Wr. Wb</p>
          <p className='font-serif z-10 text-center px-24 mt-3'>Kami bermaksud untuk menyelenggarakan acara pernikahan putra-putri kami:</p>
          <br></br>
          <Image className='z-10' width={180} height={180} src="/images/clipina.png" alt='couple'/>
          <p className='font-qamila z-10 drop-shadow-lg shadow-pink-500 text-2xl font-semibold text-pink-500 mt-2'>Ina Amanda</p>
          <p className='font-serif z-10 drop-shadow-lg shadow-pink-500 text-base px-28 text-center mt-5'>Putri dari Bpk. Aruman (Alm) & Ibu Arnasih</p>
          <br></br>
          <p className='font-qamila z-10 text-3xl text-pink-500'>&</p>
          <br></br>
          <Image className='z-10' width={180} height={180} src="/images/clipsyafiq.png" alt='couple'/>
          <p className='font-qamila z-10 drop-shadow-lg shadow-pink-500 text-2xl font-semibold text-pink-500 mt-2'>Abu Syafiq Arridho</p>
          <p className='font-serif z-10 drop-shadow-lg shadow-pink-500 text-base px-28 text-center mt-5'>Putra dari Ibu Jusmiati S.Ag & Bpk. Suyadi S.Ag M.M</p>
          <Image className='rounded-3xl' src="/images/belakang4.png" layout='fill' alt='couple'/>
        </div>
    )
}