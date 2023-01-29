import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import "./Home.css";

const Home = () => {
    const [surah, setSurah] = useState(1);

    const surahUrl = 'http://api.alquran.cloud/v1/surah';
    const currentSurahUrl = `http://api.alquran.cloud/v1/surah/${surah}`

    const { data: surahs = [], isLoading: surahsLoading } = useQuery({
        queryKey: ['surah'],
        queryFn: async () => {
            const res = await fetch(surahUrl)
            const data = await res.json();
            return data.data;
        }
    });

    const { data: currentSurah = [], isLoading: currentSurahLoading } = useQuery({
        queryKey: ['currentSurah', surah],
        queryFn: async () => {
            const res = await fetch(currentSurahUrl)
            const data = await res.json();
            return data.data;
        }
    });

    if(currentSurahLoading || surahsLoading) {
        return <Spinner />
    }

    const handleChangeSurah = (e) => {
        setSurah(parseInt(e.target.value))
    } 

    console.log(currentSurah);


    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='container py-6'>
                <div className="bg-white p-4 shadow rounded">
                    <div className="flex -mx-4 items-center mb-6">
                        <div className="flex-1 px-4">
                            <select onChange={(e) => handleChangeSurah(e)} className='quran-input' name="" id="">
                                {/* <option value="" selected>Select Surah</option> */}
                                {
                                    surahs.map((item) => <option selected={surah === item.number} key={item.number} value={item.number}>{item.name} - {item.englishName}</option>)
                                }
                            </select>
                        </div>

                        <div className="flex-1 px-4 text-center">
                            <h3 className='font-bold mb-1 text-lg'>
                                {
                                    currentSurah.name
                                }
                            </h3>
                            <p>{currentSurah.englishName}</p>
                        </div>

                        {/* <div className="flex-1 px-4">
                            <select className='quran-input' name="" id="">
                                <option value="">Select Ayah</option>
                            </select>
                        </div> */}
                    </div>

                    <div className="">
                        {
                            currentSurah?.ayahs?.map((ayah) =>
                                <div key={ayah.number} className="text-3xl">
                                    <p className='flex items-center mb-6'>
                                        <span className='text-xs flex items-center justify-center w-5 h-5 border rounded-full mr-4'>{ayah.numberInSurah}</span> {ayah.text}
                                    </p>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;