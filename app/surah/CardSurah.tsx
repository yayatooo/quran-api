'use client';
import { useEffect, useState } from 'react';
import { FiList, FiGrid } from 'react-icons/fi';
import Link from 'next/link';
import SearchBar from '../SearchBar';

export default function CardSurah() {
  const [dataAlquran, setDataAlquran] = useState([]);
  const baseUrl = 'https://equran.id/api/v2/surat';

  const getAllDataQuran = async () => {
    try {
      const response = await fetch(baseUrl);
      const { data } = await response.json();
      setDataAlquran(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDataQuran();
  }, []);

  type MappingProps = {
    nomor: number;
    nama: string;
    namaLatin: string;
    arti: string;
    tempatTurun: string;
    jumlahAyat: number;
  };

  return (
    <main className='bg-white'>
      <section className="flex justify-between text-3xl font-poopins font-semibold px-12 py-16">
        <h1>List Surah</h1>
        <section className="flex gap-x-8">
          <SearchBar />
        </section>
      </section>

      <section className="flex justify-center flex-wrap gap-10 py-14 font-poopins">
        {dataAlquran.map((data: MappingProps) => {
          return (
            <Link href={`surah/${data.nomor}`}
                  className=" bg-yellow-secondary w-3/12 py-4 px-8 rounded-lg flex justify-between items-center shadow-lg"
                  key={data.nomor}
            >
                    <div className="flex items-center gap-x-4">
                      <p className="w-10 h-10 flex justify-center items-center rounded-full bg-primary text-white font-semibold">
                        {data.nomor}
                      </p>
                      <div>
                        <h1 className="font-semibold py-2">
                          {data.namaLatin}
                          <span className="font-light text-sm">({data.arti})</span>
                        </h1>
                        <p className="">
                          {data.tempatTurun} -{' '}
                          <span className="font-light text-sm text-gray-500">
                            {data.jumlahAyat} Ayat
                          </span>
                        </p>
                      </div>
                    </div>
                    <h1 className="font-semibold text-3xl">{data.nama}</h1>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

