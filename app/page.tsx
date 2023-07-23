import Image from "next/image";
import FooterHome from "./FooterHome";
import Link from "next/link";

export default function Home() {
  

  return (
    <>
    <main className="bg-white w-full flex justify-center items-center"> 
      <section className="w-5/12 font-poopins font-semibold ">
        <p className="text-xl">Assalamu'alaikum</p>
        <h1 className="text-5xl text-primary py-4">Al-Qur'an Online</h1>
        <p className="text-xl ">Baca Al-Qur'an secara Online dimana dan kapanpun saja dengan mudah</p>
        <div className="py-8 flex gap-x-5">
          <Link href='/surah' className="bg-blue-secondary text-white py-3 px-6 rounded-lg">Surah</Link>
          <Link href="https://github.com/yayatooo" className="bg-blue-secondary text-white py-3 px-6 rounded-lg">Kunjungi</Link>
        </div>
      </section>
      <section>
        <Image src="./reading-quran.svg" height={650} width={650} alt="Cover" />
      </section>
    </main>
    <FooterHome />
    </>
    
  );
}
