import SearchResultCard from '@/components/SearchResultCard';
import { useState, useEffect } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  async function fetchData() {
    setLoading(true);

    try {
      const APIKey = process.env.NEXT_PUBLIC_API_KEY;
      const url = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIKey}`,
        },
      });

      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='p-8'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center'>
        <label className='input input-bordered mb-16 mt-8 flex w-full max-w-md items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
          <input
            type='text'
            className='grow'
            placeholder='Search...'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        {loading && <span className='loading loading-spinner loading-lg'></span>}
        <div className='flex w-full max-w-3xl flex-col items-start gap-8'>
          {results.map((media) => (
            <SearchResultCard media={media} type={media.media_type} />
          ))}
        </div>
      </div>
    </div>
  );
}
