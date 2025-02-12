export default function MediaCard({ media }) {
  return (
    <a
      href='/'
      target='_blank'
      className='flex w-full max-w-48 flex-col rounded-lg border bg-base-200 shadow-lg'
    >
      <img
        className='min-h-[285px] rounded-t-lg'
        src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
        alt={`Poster of ${media.title}`}
      />

      <div className='p-2'>
        <p className='line-clamp-2 font-bold'>{media.title}</p>
        <p className='text-sm opacity-80'>{media.release_date}</p>
      </div>
    </a>
  );
}
