import Partner from "@/component/Partner"
import InputComponent from "@/component/form"

export default function HeadLine() {

 return (
    <div className="wrapper">
        
        <div className="partnerBlock">
            <Partner/>
        </div>
        <div className="formUploader">  
       
            <p>ДІЗНАТИСЯ ВАРТІСТЬ ПЕРЕКЛАДУ
                ЗА 15 ХВИЛИН</p>
            <InputComponent/>
       
    </div>
    </div>
 )
}