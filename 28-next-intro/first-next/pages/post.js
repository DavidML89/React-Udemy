import axios from "axios";

const Post = ({ id, comments }) => (
  <div>
    <h1>This is the Post #{id}</h1>
    <ul>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </ul>
  </div>
);

const Comment = ({ name, body }) => (
  <div>
    <h4>{name}</h4>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ({ query } ) => {
  const resp = await axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
  const { data } = resp
  return {...query, comments: data };
};

export default Post;
