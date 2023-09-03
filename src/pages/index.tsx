import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fonts } from '@/helpers/fonts';
import facebook from '../icons/facebook.svg';
import github from '../icons/github.svg';
import instagram from '../icons/instagram.svg';
import linkedin from '../icons/linkedin.svg';
import mail from '../icons/mail.svg';
import threads from '../icons/threads.svg';

export default function Home() {
  return (
    <main className='text-white flex flex-col h-screen items-center justify-center align-middle from-gray-950 to-gray-700 bg-gradient-to-tl'>
      <div className={`${fonts.body.className} text-4xl md:text-6xl -mt-10`}>scottfreeman.net</div>
      <div className='flex items-center mt-8 space-x-8 links'>
        <Link href='https://www.facebook.com/scottfreeman.net'>
          <Image src={facebook} alt='Facebook' width={40} className='w-7 md:w-10' />
        </Link>
        <Link href='https://www.instagram.com/scottfreeman/'>
          <Image src={instagram} alt='Instagram' width={40} className='w-7 md:w-10' />
        </Link>
        <Link href='https://www.threads.net/@scottfreeman'>
          <Image src={threads} alt='Threads' width={40} className='w-7 md:w-10' />
        </Link>
        <span className='hidden md:block w-px bg-white h-6 border-r'></span>
        <Link href='https://github.com/scottfreeman'>
          <Image src={github} alt='Github' width={40} className='w-7 md:w-10' />
        </Link>

        <Link href='https://www.linkedin.com/in/scottfreeman/'>
          <Image src={linkedin} alt='LinkedIn' width={40} className='w-7 md:w-10' />
        </Link>
        <span className='hidden md:block w-px bg-white h-6 border-r'></span>
        <Link href='mailto:email@scottfreeman.net'>
          <Image src={mail} alt='Mail' width={40} className='w-7 md:w-10' />
        </Link>
      </div>
    </main>
  );
}
