import { useEffect, useState } from 'react';
import MediaCard from '@/components/MediaCard';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTY5NGE5ODRiZTJjMzlmNjg4NmZkNmVjOTA5ZDhiNyIsIm5iZiI6MTczMTY4NDkyNS43MTQsInN1YiI6IjY3Mzc2YTNkZDYzZmVkNTgyNmNmNTZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lUQlOfiPdTknmZjLfXt1Bp1vtflKHBYFIUrPUivLZAU',
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('data', data);
    setPopularMovies(data.results);
  }

  return (
    <div className='mx-auto max-w-7xl py-8'>
      <h1 className='mb-8 text-2xl font-semibold'>Popular Movies</h1>
      <div className='flex flex-wrap justify-between gap-8'>
        {popularMovies.map((movie, index) => (
          <MediaCard key={index} media={movie} />
        ))}
      </div>
    </div>
  );
}
