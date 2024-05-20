'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      <div className='custom-screen sm:pt-56 pt-28 flex justify-between gap-8 sm:flex-row flex-col'>
        <div className='space-y-5 max-w-4xl mx-auto text-center sm:w-1/2'>
          <button
            className={`border py-2 rounded-2xl hover:bg-gray-100 transition px-5 text-sm `}
          >
            Planning your perfect productive day
          </button>
          <h1 className='text-4xl  font-extrabold mx-auto sm:text-6xl'>
            Plan your productive<br/>  day using AI
          </h1>
          <p className='max-w-xl mx-auto'>
            Tired of Planning your day
            let us do the productive day for you <span className='font-semibold'>using AI</span> in
            seconds, completely for free.
          </p>
          <div className='flex items-center justify-center gap-x-3 font-medium text-sm'>
            <Link
              href='/planner'
              className='ml-2 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mr-2'
            >
              Start Planning
            </Link>
            <Link
              target='_blank'
              href='https://github.com/selimagirel/planmydaybuddy'
              className='ml-2 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mr-2'
              scroll={false}
            >
              Github 
              <Star className='h-4 w-4 ml-2'/>
            </Link>
          </div>
        </div>
        <div className=''>
          <Image
            src='/3.png'
            className='rounded-2xl border mr-10 mb-10'
            alt='hero'
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}
