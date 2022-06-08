import axios from "axios";

const Index = ({ posts }) => (
  <div>
    <h1>This is the index</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async () => {
  const resp = await axios.get("http://jsonplaceholder.typicode.com/posts")
  const { data } = resp;
  return { posts: data }
}

export default Index;
