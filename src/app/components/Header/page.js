import Link from 'next/link';

import '@/app/globals.css'




export default function Header() {
  return (
    <header className='bg-white shadow-xl p-8 flex justify-between font-semibold'> {/* Changed from <Header> to <header> */}
    <div>
        <h1>JasGiigli</h1>
    </div>
      <nav >
        <ul className='flex space-x-4 '>
          <li className='hover:underline hover:text-yellow-600'>
            <Link href="/">Home</Link> {/* Removed @ and corrected the href */}
          </li>
          <li className='hover:underline hover:text-yellow-600'>
            <Link href="/courses">Courses</Link>
          </li>
          <li className='hover:underline hover:text-yellow-600'>
            <Link href="/contact">Contact</Link>
          </li>
          <li className='hover:underline hover:text-yellow-600'>
            <Link href="/about">About US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
