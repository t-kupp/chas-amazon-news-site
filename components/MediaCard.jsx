import { FaRegHeart } from 'react-icons/fa';

export default function MediaCard({ media, type }) {
  console.log('media', media);

  return (
    <a
      href={type === 'movie' ? `/movie/${media.id}` : `/tv/${media.id}`}
      className='flex w-full max-w-48 flex-col rounded-lg border border-base-300 bg-base-200 shadow-lg transition-[border-color] duration-100'
    >
      <img
        className='min-h-[285px] rounded-t-lg'
        src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
        alt={`Poster of ${media.title ? media.title : media.name}`}
      />

      <div className='relative flex h-full flex-col justify-between p-2'>
        <p className='line-clamp-2 font-bold'>{media.title ? media.title : media.name}</p>
        <p className='text-sm opacity-80'>
          {media.release_date ? media.release_date : media.first_air_date}
        </p>
        <button className='btn btn-circle btn-sm absolute bottom-0 right-0 duration-0'>
          <FaRegHeart />
        </button>
      </div>
    </a>
  );
}
