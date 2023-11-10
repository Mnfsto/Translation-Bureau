"use client"
import { useForm, ValidationError } from '@formspree/react';

export default function OrderForm(props){
    const { className, children, heading, title, ...rest } = props;
    const [state, handleSubmit] = useForm("xdorjpaw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return(
        <div className={className}>
        <h4>{heading}</h4>
        <p>{title}</p>
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

        </div>
        </div>
    )
}