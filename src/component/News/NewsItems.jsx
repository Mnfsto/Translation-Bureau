import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';


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

     

function ItemList() {
  const { loading, error, data } = useQuery(GET_ITEMS);
// loading as boolean 
  if (loading) return <p>Loading...</p>;
// if have error that 'll get populated as message 
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts.edges;
    

  return (
    <div>
    {posts.map(({ node }) => (
        <div key={node.title}>
          <h2>{node.title}</h2>
          <p>{node.content}</p>
          {/* Render other post details as needed */}
        </div>
      ))}
    </div>
  )
}

export default ItemList;