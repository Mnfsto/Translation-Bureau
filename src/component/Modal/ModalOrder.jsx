"use client"
import Modal from '@/component/Modal/Modal';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation'


  export default function ModalOrder({children, shown, close}) {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false);
    const [state, handleSubmit] = useForm("xdorjpaw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
            return (
                
                <Modal title='Експрес-переклад
                документів' >
                <div className='form-style'>    
                <form onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text" 
                    name="name"
                    placeholder="First Name"
                />  
                
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="email@domain.tld"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <input
                    id="telephone"
                    type="text" 
                    name="telephone"
                    placeholder="(063) 555-0000"
                />
                <button className='primary_btn' type="submit" disabled={state.submitting}>
                Надіслати
                </button>
            </form>
            <button className='secondary_btn' onClick={close}>Закрити</button>
            </div>
            </Modal>
            );
  }