"use client"
import "@/styles/modal.scss"



export default function Modal({children, title, styles}) {
      
    
    return(
        <div className="modal-wrapper">
        <div style={styles} className="modal">
        
        {title && <p>{title}</p>}
        
        {children}
        
        </div>

        </div>
        
    )
}