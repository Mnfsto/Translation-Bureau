'use client';
import { useRouter } from 'next/navigation'

export default function Button({text, href}) {
    const router = useRouter()
    const clickHandler = () =>  router.push(href);
    return(
        <button onClick={clickHandler} type='button'  className='primary_btn'>
        {text}
      </button>
    )
}