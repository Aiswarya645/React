import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movie = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const moviedata = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`);
            if (response.data.Search) {
                setData(response.data.Search);
            } else {
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]); 
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        moviedata();
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
            <form onSubmit={handleSubmit} className="mb-6 flex flex-col items-center gap-4">
                <label className="text-2xl font-semibold italic">Movie</label>
                <input
                    type="text"
                    id="movie"
                    placeholder="Enter the movie"
                    value={search}
                    onChange={handleChange}
                    className="p-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Submit</button>
            </form>

            {data.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6'>
                    {data.map((movie, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
                            <Link to={`/movies/${movie.imdbID}`}>
                                <img src={movie.Poster} alt={movie.Title} className="w-40 h-60 object-cover rounded-lg mb-4" />
                            </Link>
                            <h3 className="text-lg font-semibold text-center">{movie.Title}</h3>
                            <p className="text-gray-400">Year: {movie.Year}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Movie;
