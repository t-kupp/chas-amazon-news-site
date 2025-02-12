import Link from 'next/link';
import { IoSunnyOutline, IoSearch } from 'react-icons/io5';

export default function Header() {
  return (
    <div className='navbar bg-primary px-8 font-semibold text-neutral shadow'>
      <div className='mx-auto flex w-full max-w-7xl justify-between'>
        <div className='flex items-center gap-4'>
          <Link href={'/'}>
            <span className='link-hover link'>Movies</span>
          </Link>
          <Link href={'/tv'}>
            <span className='link-hover link'>TV Shows</span>
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <button className='btn btn-circle btn-ghost btn-sm'>
            <IoSearch size={20} />
          </button>
          <button className='btn btn-circle btn-ghost btn-sm'>
            <IoSunnyOutline size={20} />
          </button>
          <Link href={'/watchlist'}>
            <span className='link-hover link ml-2'>My Watchlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
