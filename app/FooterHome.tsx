import React from 'react'

const FooterHome = () => {
  return (
    <section className='bg-primary w-10/12 mx-auto font-poopins text-white font-semibold flex justify-between py-24'> 
      <div className='flex gap-6 text-4xl'>
        <h1>30<span className='text-yellow-primary text-lg'> Juz</span></h1>
        <h1>114<span className='text-yellow-primary text-lg'> Surah</span></h1>
        <h1>6.236<span className='text-yellow-primary text-lg'> Ayat</span></h1>
        <h1>77.845<span className='text-yellow-primary text-lg'> Kata</span></h1>
      </div>
      <div>
        <button className="bg-yellow-primary text-primary py-3 px-6 rounded-lg">API by EQuran.id</button>
      </div>
    </section>
  )
}

export default FooterHome
