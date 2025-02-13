import Link from 'next/link';

export default function Home() {
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col items-center p-8'>
      <h1 className='mb-12 mt-20 text-4xl font-semibold'>Landing Page</h1>
      <p>This is Team Amazons movie website bla bla placeholder text</p>
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
