import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => (
  <div>
    <h1>This is the index</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link>
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
