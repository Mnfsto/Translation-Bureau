"use client"
import Modal from '@/component/Modal/Modal';
import React, { useState } from 'react';
import { useForm } from '@formspree/react';

export default function Callback({children, shown, close}){
    const [show, setShow] = useState(false);
    const [state, handleSubmit] = useForm("mjvqzpar");
  if (state.succeeded) {
      return <p>Ми вам зараз зателефонуємо</p>;
  }
    return(
        <Modal title='Зворотний дзвінок' styles={{ top: "75px", zIndex: "50", height: "250px"}}>
            <form onSubmit={handleSubmit}>
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
        </Modal>
    )
}