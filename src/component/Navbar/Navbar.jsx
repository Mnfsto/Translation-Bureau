"use client"
import Link from 'next/link'
import Image from "next/image"
import Button from '../button';
import Callback from '@/component/Modal/Callback';
import { useState } from "react";
 
export default function Navbar() {
  const phone = '+380 (97) 600 63 64';
  const [show, setShow] = useState(false);
  
  return (
    <header>
      <nav>
      <Link href='/'>
      <Image
         src='/logo.svg'
          alt='logo' 
          width={172}
          height={48}
        />
      </Link>
      
      <span className='headerNav'>
      <Link href="/">Головна</Link>
      <Link href="/services">Послуги</Link>
      <Link href="/contact">Контакти</Link>
      <Link href="/news">Новини</Link>
      </span>
      

      <span className='contSoc'>
      <a href={`tel:${phone}`} className='phone'>+380 (97) 600 63 64</a>
     

    
      <Link href='https://www.facebook.com/profile.php?id=61553575850493'>
      <Image
         src='/Facebook.svg'
          alt='logo' 
          width={30}
          height={30}
        />
      </Link>
      <Link href='https://www.instagram.com/translation.bureau.od'>
      <Image
         src='/linkedin.svg'
          alt='logo' 
          width={30}
          height={30}
        />
      </Link>
      </span>
      {show && <Callback shown={show} close={() => {setShow(!show);}} />}
    <Link href="/?modal=true" onClick={() => setShow(!show)}>
    <Button text={'Callback'} href='/#'/>
    </Link>
    <></>
    
        
      </nav>      
    </header>
)
}