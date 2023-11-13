import News from "@/component/News/News"
import NewsBody from "@/component/News/NewsBody";
import Image from "next/image";

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';





export default function ServiceCard(props) {

    const GET_ITEMS = gql`
    query NewQuery {
        posts {
          edges {
            node {
              title
              uri
              content
              date
            }
          }
        }
      }`;    
        

      const { loading, error, data } = useQuery(GET_ITEMS);
      // loading as boolean 
        if (loading) return <p>Loading...</p>;
      // if have error that 'll get populated as message 
        if (error) return <p>Error: {error.message}</p>;
      
        const posts = data.posts.edges;
        const news = posts.map(({node}) => node);
    const { className, ...rest } = props;
    return(
            <div className="news-wrapper">
                <h5>Останні новини</h5>
            <div className={className} {...rest}>
            <div className="firstCard" style={{flex: "4"}}>
            <News style={{width: "100%",height: "100%"}} className="card-wrapper">
            <NewsBody link={"/news#"+news[0].uri} className="body-wrapper">
                <span>
                <p className="date">{news[0].date.split('T')[0]}</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">{news[0].title}</p>
                    <p className="content cuttedText">{news[0].content.replace(/<\/?p>/g, "")}</p>
                </div>
            </NewsBody>
            </News>
            </div>
            <div style={{flex: "4", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignContent: "space-between"}}>
            <News style={{width: "47.794117647058824%",height: "49%"}} className="card-wrapper ">
            <NewsBody link={"/news#"+news[1].uri} className="body-wrapper">
                <span>
                <p className="date">{news[1].date.split('T')[0]}</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">{news[1].title}</p>
                    <p className="content cuttedContent">{news[1].content.replace(/<\/?p>/g, "")}</p>
                </div>
            </NewsBody>
            </News>
            <News style={{width: "47.794117647058824%",height: "49%"}}  className="card-wrapper">
            <NewsBody link={"/news#"+news[2].uri} className="body-wrapper">
                <span>
                <p className="date">{news[2].date.split('T')[0]}/08</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">{news[2].title}</p>
                    <p className="content cuttedContent">{news[2].content.replace(/<\/?p>/g, "")}</p>
                </div>
            </NewsBody>
            </News>
            <News style={{width: "47.794117647058824%",height: "49%"}} className="card-wrapper">
            <NewsBody link={"/news#"+news[3].uri} className="body-wrapper">
                <span>
                <p className="date">{news[3].date.split('T')[0]}</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">{news[3].title}</p>
                    <p className="content cuttedContent">{news[3].content.replace(/<\/?p>/g, "")}</p>
                </div>
            </NewsBody>
            </News>
            <News style={{width: "47.794117647058824%",height: "49%"}} className="card-wrapper">
            <NewsBody link={"/news#"+news[4].uri} className="body-wrapper">
                <span>
                <p className="date">{news[4].date.split('T')[0]}</p>
                
                    <Image
                        src='/arrow.svg'
                        alt='logo'
                        width={39}
                        height={50}
                    />
                </span>
                <div>
                    <p className="title">{news[4].title}</p>
                    <p className="content cuttedContent">{news[4].content.replace(/<\/?p>/g, "")}</p>
                </div>
            </NewsBody>
            </News>
            </div>
        </div>
        </div>
    )

}