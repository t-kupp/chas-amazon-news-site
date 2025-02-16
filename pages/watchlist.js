import { useContext } from 'react';
import { WatchlistContext } from '@/context/WatchlistContext';
import MediaCard from '@/components/MediaCard';

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className='p-8'>
      <div className='mx-auto max-w-7xl'>
        <h1 className='mb-8 text-3xl font-semibold'>My Watchlist</h1>
        {watchlist.length === 0 ? (
          <p className='text-center text-lg'>Your watchlist is empty.</p>
        ) : (
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {watchlist.map((media) => (
              <div key={media.id} className='relative'>
                <MediaCard media={media} type={media.media_type} />
                <button
                  onClick={() => removeFromWatchlist(media.id)}
                  className='absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full text-sm'
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
