import Link from 'next/link';

export default function Home() {
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col items-center p-8'>
      <h1 className='mb-12 mt-20 text-4xl font-semibold'>Welcome to Amazon's <br></br>Movie Site!</h1>
      <p>In our page you can find the most popular Movies and Series around the world and create your own favorite list!º </p>
      <div className='mt-8 flex items-center gap-4'>
        <Link href={'/movie'}>
          <button className='btn btn-primary'>Movies</button>
        </Link>
        <Link href={'/tv'}>
          <button className='btn btn-primary'>TV Shows</button>
        </Link>
      </div>
    </div>
  );
}
