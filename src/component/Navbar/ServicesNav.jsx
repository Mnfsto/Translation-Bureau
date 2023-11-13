"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function ServiceNav(){
    const pathname = usePathname()
    console.log(pathname);

    return(
        <section className='sectionNav'>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
            <div className="firstlineNav">
                <Link className={pathname === '/documents'? 'active' : '' } href="/documents">Переклади<br></br> документів</Link>
                <Link className={pathname === '/legalization'? 'active' : '' } href="/legalization">Легалізація<br></br>  документів</Link>
                <Link className={pathname === '/artistic'? 'active' : '' } href="/artistic">Художній <br></br> переклад</Link>
                <Link className={pathname === '/webtranslate'? 'active' : '' } href="/webtranslate">Переклад<br></br>  сайту</Link>
                <Link className={pathname === '/technical'? 'active' : '' } href="/technical">Технічна<br></br>  документація</Link>
                <Link className={pathname === '/apostile'? 'active' : '' } href="/apostile">Апостиль<br></br> на документи </Link>
            </div>
            <div className="secondlineNav">
                <Link className={pathname === '/consular'? 'active' : '' } href="/consular">Консульська<br></br>  легалізація</Link>
                <Link className={pathname === '/notarial'? 'active' : '' } href="/notarial">Нотаріальний<br></br>  переклад</Link>
                <Link className={pathname === '/medical'? 'active' : '' } href="/medical">Медична<br></br>документація</Link>
                <Link className={pathname === '/legal'? 'active' : '' } href="/legal">Юридичний<br></br>  переклад</Link>
                <Link className={pathname === '/financial'? 'active' : '' } href="/financial">Переклад<br></br>  фінансовий</Link>
                <Link className={pathname === '/applications'? 'active' : '' } href="/applications">Переклад<br></br>  застосунків</Link>
            </div>
        </nav>
    </section>
    )
}