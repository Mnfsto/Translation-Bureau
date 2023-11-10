
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
            }
          }
        }
      }`;
    const { data } = await getClient().query({ query });
    const posts = data.posts.edges.map(({node}) => node);
    
    console.log ({ posts });
    return( 
    <><div>News</div><article>
            {posts.map(post => <div key={post.title}>{post.title}</div>)}

        </article></>
    
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