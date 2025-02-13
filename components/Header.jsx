import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import ThemeButton from './ThemeButton';

export default function Header() {
  return (
    <div className='navbar bg-base-200 px-8 font-semibold shadow'>
      <div className='mx-auto flex w-full max-w-7xl justify-between'>
        <div className='flex items-center gap-4'>
          <Link href={'/'}>
            <span className='link-hover link'>Home</span>
          </Link>
          <Link href={'/movie'}>
            <span className='link-hover link'>Movies</span>
          </Link>
          <Link href={'/tv'}>
            <span className='link-hover link'>TV Shows</span>
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <button className='btn btn-circle btn-ghost btn-sm'>
            <IoIosSearch size={20} />
          </button>
          <ThemeButton />
          <Link href={'/watchlist'}>
            <span className='link-hover link ml-2'>My Watchlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
