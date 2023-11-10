"use client"
import ModalOrder from "@/component/Modal/ModalOrder"
import Link from "next/link";
import { useState } from "react";
import Button from "./button";


export default function AdvancedBannerTop  ({title, subtitle}) {
    const [showModal, setShowModal] = useState(false);
 
return(
<div className="bannerTop" 
        style={{
                 background: 'url(./heroBanner.png)',
                 backgroundSize: 'cover', 
                 backgroundSize: "cover",
                 backgroundPosition: "center"
                 
                }}>
    <div className="heroContent">                
        <h1>
        {title}
        </h1>
        <p>{subtitle}</p>
        <></>
        <Link href="/?modal=true" onClick={() => setShowModal(!showModal)}>
        <Button text="Замовити" href="/#" /></Link>
        {showModal && <ModalOrder shown={showModal} close={() => {
          setShowModal(!showModal);
        }} />}
        
    </div>
</div>
)

};
