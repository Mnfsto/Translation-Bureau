import Link from 'next/link'
import Image from "next/image"
export default function Partner() {

    return(
        <div>
            <p>Партнерські організації</p>
            <ul>
                <li>
                <Link href='/'>
                <Image
                    src='/logo100MoB.png'
                    alt='logo' 
                    width={80}
                    height={80}
                    />
                </Link>
                </li>
                <li>
                <Link href='/'>
                <Image
                    src='/logo100MoB.png'
                    alt='logo' 
                    width={80}
                    height={80}
                    />
                </Link>
                </li>
            </ul>
        </div>
    )
}