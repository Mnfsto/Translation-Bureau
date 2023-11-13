"use client"
import AdvancedBannerTop from "@/component/AdvancedBannerTop"
import HeadLine from "@/component/HeadLine"
import OurBenefits from "@/component/OurBenefits"
import ServiceCard from "@/component/ServiceCard"
import OrderForm from "@/component/OrderForm"
import Review from "@/component/Review/Review"
import NewsBlock from"@/component/News/NewsBlock"






export default function Home() {

  return (
    <main>
      <AdvancedBannerTop title={'Експрес-переклад документів'} subtitle={'Ваші документи будуть перекладені на будь-яку мову. Замовте зараз та отримайте знижку.'}/> 
      
       <HeadLine/>
       <ServiceCard className='service-wrapper'/>
       <OurBenefits />
       <OrderForm className='order-wrapper' heading="Замовити консультацію" title="Заповніть форму і ми з вами швидко зв'яжемося" />
      <Review />
      
      <NewsBlock style={{ height: "39.705882352941176%", display: "flex"}} />
      
    </main>
  )
}


