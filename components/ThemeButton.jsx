import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

export default function ThemeButton() {
  const [theme, setTheme] = useState('');
  useEffect(() => {
    // Set data-theme to system theme on page load
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    document.documentElement.setAttribute('data-theme', systemTheme);
    setTheme(systemTheme);
  }, []);

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    setTheme(isDark ? 'light' : 'dark');
  }

  return (
    <button onClick={toggleTheme} className='btn btn-circle btn-ghost btn-sm'>
      {theme === 'dark' ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}
    </button>
  );
}
