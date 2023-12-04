import ServiceNav from "@/component/Navbar/ServicesNav"
import OrderForm from "@/component/OrderForm"
import "@/styles/component.form.scss"


export const metadata = {
    title: ' Translation Bureau | Послуги',
    description: 'Переклад довідок та свідоцтв (переклад довідок з місця роботи, з банку, свідоцтв про народження. Професійний підхід та висока якість перекладів.)',
  }

export default function ServiceLayout({
    children, // will be a page or nested layout
  }) {
    
    return (
        <main className="servicepage-wrapper">
            <h1>Послуги</h1>
     
                <ServiceNav/>
                <article className="listServices">
                    {children}
                </article>
                <sidebar >
                    <OrderForm className='order-wrapper' heading="Замовити консультацію" title="Заповніть форму і ми з вами швидко зв'яжемося" />
                </sidebar>
            </main>
        
      
    )
  }