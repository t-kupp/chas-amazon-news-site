import Link from 'next/link';

import ThemeButton from './ThemeButton';

export default function Header() {
  return (
    <div className='navbar bg-slate-800 px-8 font-semibold text-slate-200 shadow'>
      <div className='mx-auto flex w-full max-w-7xl justify-between'>
        <div className='flex items-center gap-8'>
          <Link href={'/'}>
            <span className='link-hover link'>Home</span>
          </Link>
          <Link href={'/movie'}>
            <span className='link-hover link'>Movies</span>
          </Link>
          <Link href={'/tv'}>
            <span className='link-hover link'>TV Shows</span>
          </Link>
          <Link href={'/search'}>
            <span className='link-hover link'>Search</span>
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <ThemeButton />
          <Link href={'/watchlist'}>
            <span className='link-hover link ml-2'>My Watchlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
