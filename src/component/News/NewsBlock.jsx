import News from "@/component/News/News"
import NewsBody from "@/component/News/NewsBody";
import Image from "next/image";



export default function ServiceCard(props) {

    const { className, ...rest } = props;
    return(
            <div className="news-wrapper">
                <h5>Останні новини</h5>
            <div className={className} {...rest}>
            <div className="firstCard" style={{flex: "4"}}>
            <News style={{width: "100%",height: "100%"}} className="card-wrapper">
            <NewsBody link="/#" className="body-wrapper">
                <span>
                <p className="date">24/08</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">Создавайте тексты с помощью нейронной сети</p>
                    <p className="content">В новом сервисе можно создавать тексты с помощью нейронной сети. 
                        Пользователи могут вводить заголовки и получать готовые тексты, 
                        которые можноиспользовать для различных целей. Сервис позволяет создавать тексты
                         на разные темы и в разных стилях.</p>
                </div>
            </NewsBody>
            </News>
            </div>
            <div style={{flex: "4", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignContent: "space-between"}}>
            <News style={{width: "47.794117647058824%",height: "49%"}} className="card-wrapper ">
            <NewsBody link="/#" className="body-wrapper">
                <span>
                <p className="date">24/08</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">Создавайте тексты с помощью нейронной сети</p>
                    <p className="content">В новом сервисе можно создавать тексты с помощью нейронной сети. 
                        Пользователи могут вводить заголовки и получать готовые тексты, 
                        которые можноиспользовать для различных целей. Сервис позволяет создавать тексты
                         на разные темы и в разных стилях.</p>
                </div>
            </NewsBody>
            </News>
            <News style={{width: "47.794117647058824%",height: "49%"}}  className="card-wrapper">
            <NewsBody link="/#" className="body-wrapper">
                <span>
                <p className="date">24/08</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">Создавайте тексты с помощью нейронной сети</p>
                    <p className="content">В новом сервисе можно создавать тексты с помощью нейронной сети. 
                        Пользователи могут вводить заголовки и получать готовые тексты, 
                        которые можноиспользовать для различных целей. Сервис позволяет создавать тексты
                         на разные темы и в разных стилях.</p>
                </div>
            </NewsBody>
            </News>
            <News style={{width: "47.794117647058824%",height: "49%"}} className="card-wrapper">
            <NewsBody link="/#" className="body-wrapper">
                <span>
                <p className="date">24/08</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">Создавайте тексты с помощью нейронной сети</p>
                    <p className="content">В новом сервисе можно создавать тексты с помощью нейронной сети. 
                        Пользователи могут вводить заголовки и получать готовые тексты, 
                        которые можноиспользовать для различных целей. Сервис позволяет создавать тексты
                         на разные темы и в разных стилях.</p>
                </div>
            </NewsBody>
            </News>
            <News style={{width: "47.794117647058824%",height: "49%"}} className="card-wrapper">
            <NewsBody link="/#" className="body-wrapper">
                <span>
                <p className="date">24/08</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">Создавайте тексты с помощью нейронной сети</p>
                    <p className="content">В новом сервисе можно создавать тексты с помощью нейронной сети. 
                        Пользователи могут вводить заголовки и получать готовые тексты, 
                        которые можноиспользовать для различных целей. Сервис позволяет создавать тексты
                         на разные темы и в разных стилях.</p>
                </div>
            </NewsBody>
            </News>
            </div>
        </div>
        </div>
    )

}