import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
    <footer>
    <div className="footer-wrapper">
     <div className="footerSoc">
      <Link href='/'>
      <Image
         src='/logoWhite.svg'
          alt='logoTB' 
          width={172}
          height={48}
        />
      </Link>
      <p>Бюро перекладів TB надає послуги перекладу вже понад 15 років
         сотням задоволених клієнтів..</p>
      <span className='contSoc'>

     

    
      <Link href='https://www.facebook.com/profile.php?id=61553575850493'>
      <Image
         src='/icons/whiteFacebook.svg'
          alt='white Facebook' 
          width={50}
          height={50}
        />
      </Link>
      <Link href='https://www.instagram.com/translation.bureau.od'>
      <Image
         src='/icons/whiteInstagram.svg'
          alt='white Instagram' 
          width={50}
          height={50}
        />
      </Link>
      <Link href='/#'>
      <Image
         src='/icons/whiteTelegram.svg'
          alt='white Telegram' 
          width={50}
          height={50}
        />
      </Link>
      </span>
    </div>

    <div className="footerNav">
    <nav>
      
      
      <span>
        <p>Навігація:</p>
        <ul>
            <li><Link href="/">Головна</Link></li>
            <li><Link href="/services">Послуги</Link></li>
            <li><Link href="/contact">Контакти</Link></li>
            <li><Link href="/news">Новини</Link></li>
        </ul>
      </span>
      
    </nav>
    </div>

    <div className="footerContact">
        <p>Бюро перекладів.</p>
        <ul>
            <li>Phone: 048 722 5959</li>
            <li>Email: info@translation-bureau.ua</li>
            <li>Fax: Not specified</li>
            <li>Website: https://translation-bureau.com/contacts</li>
            <li>Address: вул. Генуезька, 1/2, Одеса</li>
        </ul>    
    </div>
    </div>    
      
        <p className="copyright">Copyright © 2023 All rights reserved.</p>
    </footer>
    )
  }