"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from "next/image"
import '@/styles/component.form.scss'


// import { useState } from 'react'

// export default function InputComponent() { 
//   const [inputText, setText] = useState('hello'); 

//   function handleChange(e) { 
//     setText(e.target.value); 
//   } 

//   return ( 
//     <> 
//       <input value={inputText} onChange={handleChange} /> 
//       <p>You typed: {inputText}</p> 
//       <button onClick={() => setText('hello')}> 
//         Reset 
//       </button> 
//     </> 
//   ); 
// } 



export default function InputComponent() { 
    const [state, handleSubmit] = useForm("mjvqzova");
    if (state.succeeded) {
        return <p>Дякую ми зв'яжемося з вами</p>;
    }
    return (
      

      <form className='form-file-upload' onSubmit={handleSubmit}>
              
      <input
        id="name"
        type="text" 
        name="name"
        placeholder="Ім'я"
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
        placeholder="+380 -- --- ---"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <input
       type="file" 
       id="input-file-upload" 
       multiple={true} 
       />
       <label id="label-file-upload" htmlFor="input-file-upload">
        <div>
          <p>Перетягніть файл сюди або</p>
          <Image
         src='/IconDropFile.svg'
          alt='logo' 
          width={50}
          height={50}
        />
          <button className="upload-button">Додати документ</button>
        </div> 
      </label>
       

      </form>
  );
}
      
      
      
  

