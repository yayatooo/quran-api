'use client'
import React, { useEffect, useState } from 'react'
import { SurahProps, Ayat } from '@/types'

async function getData(ayatId:string) {
  const res = await fetch(`https://equran.id/api/v2/surat/${ayatId}`)
    if (!res.ok) throw new Error('failed to fetch')
    return await res.json()
}

export default function AyatPage({ params }: { params: SurahProps }) {

  const [surah, setSurah] = useState<SurahProps>({} as SurahProps)
  const [cardSurah, setCardSurah] = useState<Ayat[]>([])

  const getCardSurah = async () => {
    try {
      const resultAyat = await getData(params.ayatId)
      setCardSurah(resultAyat.data.ayat)
      console.log(cardSurah);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const fetchSurah = async () => {
    try {
      const result = await getData(params.ayatId)
      setSurah(result.data)
      // console.log(result);
      
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
    getCardSurah();
    fetchSurah();

  },[params.ayatId])

  

  return (
    <section className='font-poopins w-full py-12 bg-white'>
      <div className='font-semibold w-10/12 mx-auto'>
        <h1 className='text-4xl pb-6 w-full text-center'>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
          <div className='flex justify-between items-center'>
            <h2 className='py-2 text-xl px-4 bg-primary text-white rounded-lg'>{surah.arti}</h2>
            <h1 className='py-2 text-3xl px-4 bg-white text-primary rounded-lg w-5/12 text-center'>{surah.namaLatin} </h1>
            <h2 className='py-2 text-xl px-4 bg-primary text-white rounded-lg'>{surah.tempatTurun}</h2>
          </div>
        <div className='py-8'>
          <div className='flex flex-col gap-y-6' >
          {cardSurah.length > 0 && cardSurah.map((data) => {
            return (
              <div className='bg-yellow-secondary px-8 py-12 rounded-lg flex w-full' key={data.nomorAyat}>
                  <div className='w-2/12'>
                    <p className='w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center'>{data.nomorAyat}</p>
                  </div>
                  <div className='flex flex-col gap-y-4 w-10/12'>
                    <h1 className='text-right text-4xl'>{data.teksArab}</h1>
                    <i className='text-xl font-medium text-primary'>{data.teksLatin}</i>
                    <p className='text-xl'>{data.teksIndonesia}</p>
                  </div>
                </div>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
