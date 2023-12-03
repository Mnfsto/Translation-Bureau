"use client"
import ModalOrder from "@/component/Modal/ModalOrder"
import Link from "next/link";
import { useEffect, useState, useRef, useCallback, useMemo, memo } from "react";
import { motion } from 'framer-motion';
import Button from "./button";


//TODO: 
//Расширить возможности баннера добавить слайдер 
//Массив с элементами: картинка, тайтл, субтайтл.
//Навигация по слайдам
//Таймаут через каждые 5 секунд меняется слайд
// useRef, useState, useEffect, useCallback
// Добавить  Анимацию с помощью Framer Motion
//FIXME:
// Пофиксить размер блока с загаловком и тайтлом
//

export default function AdvancedBannerTop  () {
    const bannerContent = [
        {title: 'Експрес-переклад документів', subtitle: 'Ваші документи будуть перекладені на будь-яку мову. Замовте зараз та отримайте знижку.', image: './heroBanner.png'},
        {title: 'Переклад юридичних документів', subtitle: 'Ваші документи будуть перекладені на будь-яку мову. Замовте зараз та отримайте знижку.', image: './heroBanner2.png'},
    ];
    const [banner, setBanner] = useState(bannerContent[0]);
    const [currentBanner, setCurrentBanner] = useState(false);
    const timerSlide = useRef();
    const changeSlide = useCallback(() => {
       setBanner (currentBanner ? bannerContent[0] : bannerContent[1])
       setCurrentBanner(!currentBanner)
    }, [currentBanner]);
    

    function changeBanner(index){
            setBanner(bannerContent[index]) 
        }
       
    useEffect(

    ()=>{
        if (timerSlide.current) {
            clearTimeout(timerSlide.current);
          }
        console.log('change')
        timerSlide.current = setTimeout (()=>changeSlide(), 10000);
        return () => clearTimeout(timerSlide.current);
    }, [currentBanner]

    );
    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "flex-end",
        marginRight: '35%',
        marginTop: '50px',
      };
    const dotStyle = {
        color: 'grey',
        cursor: 'pointer',
    }
    const [showModal, setShowModal] = useState(false);
 
return(
<div className="bannerTop" 
        style={{
                 background: `url(${banner.image})`,
                 backgroundSize: 'cover', 
                 backgroundSize: "cover",
                 backgroundPosition: "center"
                 
                }}>
    <div className="heroContent">                
        <motion.h1
        initial={{
            x: -1000,
            opacity:0,
        }}
        animate={{
            x: 0,
            opacity: 1,
        
        }}
        transition={{
            delay: 0.5,
        }}
        
        >
        {banner.title}
        </motion.h1>
        <motion.p
            initial={{
                x: -1000,
                opacity:0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            
            }}
            transition={{
                delay: 0.7,
            }}
        >{banner.subtitle}
        
        </motion.p>
        <motion.div
            initial={{
                x: -1000,
                opacity:0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            
            }}
            transition={{
                delay: 0.7,
            }}
        >
        <></>
        <Link href="/?modal=true" onClick={() => setShowModal(!showModal)}>
        <Button text="Замовити" href="/#" /></Link>
        {showModal && <ModalOrder shown={showModal} close={() => {
          setShowModal(!showModal);
        }} />}
        </motion.div>
        <div style={dotsContainerStyles}>
        {bannerContent.map((slide,slideIndex)=>(
            <div style={dotStyle} key={slideIndex} onClick={() => changeBanner(slideIndex)}>
            ●
            </div>     
        ))}</div>
    </div>
    
</div>
)

};
