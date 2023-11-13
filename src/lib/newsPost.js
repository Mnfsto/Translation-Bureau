"use server"
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";


export default async function newsPost (){

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

    return(
        posts  
    )
}