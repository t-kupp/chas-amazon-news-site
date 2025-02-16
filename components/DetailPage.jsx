import { useContext, useEffect, useState } from 'react';
import { WatchlistContext } from '@/context/WatchlistContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function DetailPage({ media, type }) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(WatchlistContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(watchlist.some((item) => item.id === media.id));
  }, [watchlist, media.id]);

  const toggleWatchlist = () => {
    if (isBookmarked) {
      removeFromWatchlist(media.id);
    } else {
      addToWatchlist({ ...media, type });
    }
  };

  return (
    <div className='max-w-5xl mx-auto p-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Poster */}
        <img
          className='w-full rounded-lg shadow-lg'
          src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
          alt={media.title || media.name}
        />

        {/* Details */}
        <div className='col-span-2'>
          <h1 className='text-3xl font-bold mb-2'>{media.title || media.name}</h1>
          <p className='text-sm opacity-80'>{media.release_date || media.first_air_date}</p>
          <p className='mt-4 text-lg'>{media.overview}</p>
          
          {/* Bookmark Button */}
          <button
            className='mt-4 flex items-center gap-2 btn btn-outline'
            onClick={toggleWatchlist}
          >
            {isBookmarked ? <FaHeart className='text-red-500' /> : <FaRegHeart />} Add to Watchlist
          </button>
        </div>
      </div>

      {/* Trailer Section */}
      {media.videos?.results.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-xl font-semibold mb-4'>Watch Trailer</h2>
          <iframe
            className='w-full aspect-video rounded-lg'
            src={`https://www.youtube.com/embed/${media.videos.results[0].key}`}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
