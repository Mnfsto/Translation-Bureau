import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from "next/image";
import '@/styles/component.form.scss';


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

//TODO:
//Сделать субмит формы при вложении файла
//
//FIXME:
//
export default function InputComponent() { 
    const [state, handleSubmit] = useForm("mjvqzova");
  
    const [displayFile, setDisplayFile] = useState({display: 'block'});
    const [uploadFile, fileUploaded] = useState(false);
    const uploadStyle ={
      fontSize: '1em',
      
    }
    
    const Upload = () =>{
      fileUploaded(true);
     
    }

    useEffect(
      ()=>{
        setDisplayFile({display: "none"});
      },[uploadFile]
    );


    if (state.succeeded) {
      return <p style={{color: '#4C1EF3',paddingTop: '20px'}}>Дякую ми зв'яжемося з вами</p>;
    }
    return (
      

      <form id='form' className='form-file-upload' onSubmit={handleSubmit}>
              
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
      
       <label id="label-file-upload" htmlFor="input-file-upload">
       
        <div>
          <p>Перетягніть файл сюди або</p>
          <input
        type="file"
        name="attachment"
        accept="image/png, image/jpeg, application/pdf"   
        type="file" 
        id="input-file-upload" 
        multiple={true} 
        onDrop={Upload}
        onChange={Upload}
        style={displayFile}
       />
          <Image
         src='/IconDropFile.svg'
          alt='logo' 
          width={50}
          height={50}
        />
          <button type="submit" className="upload-button" disabled={state.submitting}>{uploadFile? <button style={uploadStyle}>Натисніть відправити</button> :'Додати документ'}</button>
        </div> 
      </label>
       

      </form>
  );
}
      
      
      
  

