const Post = ({ id }) => (
  <h1>This is the Post #{id}</h1>
)

Post.getInitialProps = async ({ query} ) => {
  return query;
}
export default Post;
