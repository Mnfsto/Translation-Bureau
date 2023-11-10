"use client"
import { useState } from "react";
import BasicModal from "@/component/Modal/BasicModal"




export default function Contact(){
    const [showModal, setShowModal] = useState(false);

    return( 
       
       <div>
        <button onClick={() => setShowModal(!showModal)}>Open Modal</button>
        {showModal && <BasicModal onClose={() => setShowModal(flase)}>Hello from the modal!</BasicModal>}
    
        </div>

)    

}