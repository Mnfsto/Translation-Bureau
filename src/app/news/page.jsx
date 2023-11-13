
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";




export default async function news (){
    const query =  gql`
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
    const { data } = await getClient().query({ query });
    const posts = data.posts.edges.map(({node}) => node);
    
    console.log ( posts[2].date.split('T')[0] );
    return( 
      <main className="pageNews-wrapper">
    <h1>News</h1>
        
    <article>
      
            {posts.map(post =>
              <div id={post.uri} className="newsContent" key={post.uri}>
                
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <div className="date">{post.date.split('T')[0]}</div>

              
              
              </div>)}

    </article>

        </main>
    
    )
}

// export async function getStaticProps() {
//     const client = new ApolloClient({
//       uri: 'https://translation-bureau.com/graphql',
//       cache: new InMemoryCache(),
//     });
//       const response = client.query({
            // gql`
            // query NewQuery {
            // posts {
            // edges {
            // node {
            // title
            // uri
            // content
            // }
            // }
            // }
            // }`
//       });
//       const posts = response.data.posts.edges.map(({node}) => node);
//       console.log ('posts', posts);
  
//     return {
//       props: {
//         posts
//       }
//     };
//   }