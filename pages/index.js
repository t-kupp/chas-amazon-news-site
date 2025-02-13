import { useEffect, useState } from 'react';
import MediaCard from '@/components/MediaCard';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const APIKey = process.env.NEXT_PUBLIC_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${APIKey}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log('data', data);
    setPopularMovies(data.results);
  }

  return (
    <div className='p-8'>
      <div className='mx-auto max-w-7xl'>
        <h1 className='mb-8 text-2xl font-semibold'>Popular Movies</h1>
        <div className='flex flex-wrap justify-between gap-8'>
          {popularMovies.map((movie, index) => (
            <MediaCard key={index} media={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
