import OrderForm from "@/component/OrderForm";
import Image from "next/image";
import Link from "next/link";







export default function Contact(){
    


    return( 
       <main>
        <h1 className="headingContact">Контакти</h1>

        <div className="contact-wrapper">
        <section>
        <h2>Слідкуйте за нами</h2>
        <h3>гей! давай працювати
            разом над чимось
            новим</h3>
        </section>
        <section>
            <address className="contactInfo">
        <a  href="mailto:translation.odesa@gmail.com">translation.odesa@gmail.com</a>
            <a href="+380 (97) 600 63 64">+380 (97) 600 63 64</a>
            </address>
                <span className='contSoc'>

                    

                    
                <Link href='https://www.facebook.com/profile.php?id=61553575850493'>
                <Image
                src='/icons/Facebook.svg'
                    alt='white Facebook' 
                    width={50}
                    height={50}
                />
                </Link>
                <Link href='https://www.instagram.com/translation.bureau.od'>
                <Image
                src='/icons/Instagram.svg'
                    alt='white Instagram' 
                    width={50}
                    height={50}
                />
                </Link>
                <Link href='/#'>
                <Image
                src='/icons/Telegram.svg'
                    alt='white Telegram' 
                    width={50}
                    height={50}
                />
                </Link>
                </span>
            <OrderForm />
        </section>
    
        </div>

       </main>
       

)    

}