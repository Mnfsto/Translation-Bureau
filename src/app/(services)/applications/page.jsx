"use client"
import Accordion from "@/component/Accordion";


export default function Applications({ data }){
  const accordionData = [
    { 
      title: 'Переклад мобільних додатків: користуйтеся глобальним успіхом', 
      content: 'Надайте своєму мобільному додатку глобальний характер за допомогою наших послуг з перекладу. Ми забезпечимо точний та професійний переклад усіх елементів додатку, зберігаючи його функціональність та привабливість для користувачів різних мовних груп.' 
    },
    { 
      title: 'Переклад програмного забезпечення: гарантія ефективності та сумісності', 
      content: 'Наші досвідчені перекладачі допоможуть вам гарантувати ефективність та сумісність вашого програмного забезпечення на різних мовах. Ми збережемо технічну точність перекладу, щоб ваше програмне забезпечення було легко зрозумілим та доступним для всіх користувачів.' 
    },
    { 
      title: 'Повний переклад веб-застосунків: досягайте аудиторії усього світу', 
      content: 'Забезпечте своїм веб-застосункам повний переклад для досягнення аудиторії усього світу. Наші професіонали в галузі перекладу допоможуть вам створити зрозумілий та ефективний інтерфейс для користувачів будь-якої мовної групи.' 
    },
    // Додайте більше елементів за необхідності
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

