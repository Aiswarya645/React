import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className='bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center items-center min-h-screen flex-col text-white p-6'>
            <h3 className='text-3xl font-bold font-mono mb-4'>{data.Title}</h3>
            <h2 className='text-lg text-gray-300'>{data.Year}</h2>
            <img 
                src={data.Poster} 
                alt={data.Title} 
                className='rounded-xl shadow-lg border-4 border-gray-700 mt-4 w-64 h-auto'
            />
            <p className='mt-4 text-lg font-semibold'>{data.Actors}</p>
            <div className='text-yellow-400 text-2xl mt-2'>⭐⭐⭐⭐</div>
            <p className='text-gray-400 mt-2'>Released: {data.Released}</p>
            <p className='text-gray-400'>Language: {data.Language}</p>
        </div>
    );
};

export default Details;
