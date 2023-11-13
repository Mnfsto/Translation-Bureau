"use client"
import Accordion from "@/component/Accordion";


export default function Legalization({ data }){
  const accordionData = [
    { title: 'Переклад паспортів та їх нотаріальне засвідчення: високоякісні послуги з уважністю до деталей', content: 'Наша компанія надає послуги з перекладу паспортів громадян усіх країн світу, а також нотаріального засвідчення цих перекладів. Ми гарантуємо високу якість та точність перекладу, дотримуючись всіх юридичних норм та вимог. Наш досвідчений перекладацький персонал забезпечить точність передачі всіх даних, зберігаючи конфіденційність та безпеку ваших особистих документів. Нотаріальне засвідчення підкреслить юридичну обґрунтованість перекладу, зробляючи його придатним для використання в офіційних установах. Забезпечуючи швидкість та надійність, ми гарантуємо ваше задоволення співпрацею з нами в сфері перекладу та нотаріального засвідчення паспортів.' },
    { title: 'Переклад довідок та свідоцтв: точність та конфіденційність на кожному етапі', content: 'Наша компанія пропонує послуги з перекладу довідок та свідоцтв, охоплюючи переклад документів з місця роботи, банківських виписок та свідоцтв про народження. Ми гарантуємо високий рівень якості перекладу, дотримуючись всіх норм та вимог, що стосуються цих юридично значущих документів. Наші досвідчені перекладачі забезпечать точність передачі інформації, зберігаючи конфіденційність та надійність ваших особистих даних. Ми готові надати необхідну перевірку для ваших документів, роблячи їх доступними для використання в офіційних справах. Оберігаючи швидкість та дбайливість на кожному етапі, ми зобов\'язані забезпечити вам повну задоволеність нашою ефективною роботою з перекладом та завіренням документів.' },
    { title: 'Переклад заяв на виїзд дитини: важливість чіткості та відповідальність', content: 'Наша компанія пропонує послуги з перекладу заяв на виїзд дитини, включаючи заяви-дозволи від обох або одного з батьків. Ми розуміємо важливість цих документів для забезпечення безпечного та законного перебування дитини за межами країни. Наші професіонали в галузі перекладу гарантують чіткі та точні переклади, які відповідають юридичним вимогам. Звертаючись до нас, ви можете бути впевнені в конфіденційності та надійності кожного етапу перекладу заяв. Ми прагнемо забезпечити вашу спокійність та впевненість у правильному та швидкому оформленні документів, щоб зробити виїзд вашої дитини максимально комфортним та безпечним.' },
    { title: 'Професійний переклад освітніх документів: ваша ключова паспортна до вищого світу', content: 'Наша компанія пропонує послуги з перекладу освітніх документів, включаючи дипломи та додатки до дипломів, атестати. Ми розуміємо важливість цих документів для вашої кар\'єри та освітнього шляху. Наші досвідчені перекладачі забезпечать високоякісний переклад, точно відтворюючи ваші освітні досягнення. Ми дотримуємося всіх вимог і стандартів, гарантуючи легальність та визнання перекладу в офіційних установах. Звертаючись до нас, ви можете розраховувати на швидкість та надійність, а також нашу готовність забезпечити вам високоякісний переклад освітніх документів для вашого успішного майбутнього.' },
    { title: 'Переклад резюме та доповідних матеріалів: ключ до міжнародної кар\'єри', content: 'Наша компанія надає послуги з перекладу резюме, характеристик та супровідних листів, допомагаючи вам зробити враження в глобальному ринку праці. Наші висококваліфіковані перекладачі гарантують точні та ефективні переклади, враховуючи ваші професійні досягнення та навички. Ми розуміємо, наскільки важливо виглядати конкурентоспроможно на світовій арені, тому забезпечуємо вам переклад, який відповідає високим стандартам професійності. Довірте нам свої документи, і ми гарантуємо, що ваше резюме буде представлено мовами, які розуміють роботодавці у будь-якій частині світу, відкриваючи нові можливості для вашого успіху.' },
    { title: 'Професійний переклад документів для візового оформлення: ваш безпечний крок до світового подорожжя', content: 'Наша компанія спеціалізується на послугах з перекладу необхідних документів для подачі в посольства та візові центри. Ми розуміємо важливість точності та чіткості у перекладі, оскільки це визначальний момент у процесі візового оформлення. Наші досвідчені перекладачі враховують всі вимоги та норми, що стосуються візової документації, гарантуючи правильність перекладу і його придатність для використання в офіційних інстанціях. Ми докладаємо максимум зусиль, щоб зробити весь процес легким та ефективним для вас, допомагаючи вам впевнено крокувати до візового успіху та відкривати двері для світових подорожей.' },
    // Add more items as needed
  ];
  
    return(
        <div>
         <h2>Переклади документів</h2>
          <ul>
           <Accordion data={accordionData} />
          </ul>
            
            
          

        </div>

      
      )

    
};

