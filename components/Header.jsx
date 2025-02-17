import Link from 'next/link';

import ThemeButton from './ThemeButton';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
  const [isMobil, setIsMobil] = useState(false);

  return (
    <>
      <div className='navbar bg-base-200 font-semibold shadow'>
        <div className='mx-auto flex w-full max-w-7xl justify-between'>
          <div className='lg:hidden'>
            <button onClick={() => setIsMobil(!isMobil)} className='btn btn-ghost text-xl'>
              <RxHamburgerMenu />
            </button>
          </div>
          <div className='hidden items-center gap-8 lg:flex'>
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

      {isMobil && (
        <div className='lg:hidden'>
          <div className='m-4 flex flex-col p-4 text-xl font-semibold'>
            <Link href={'/'}>
              <span className='link-hover link py-2'>Home</span>
            </Link>
            <Link href={'/movie'}>
              <span className='link-hover link py-2'>Movies</span>
            </Link>
            <Link href={'/tv'}>
              <span className='link-hover link py-2'>TV Shows</span>
            </Link>
            <Link href={'/search'}>
              <span className='link-hover link py-2'>Search</span>
            </Link>
            {/* <Link href={'/watchlist'}>
                <span className='link-hover link py-2'>My Watchlist</span>
              </Link> */}
          </div>
        </div>
      )}
    </>
  );
}
