import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}

function Post({ post }) {
  return (
    <div>
      <div className = {styles.card}>
      <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      </div>
      </div>
    </div>
  );
}

export default Post;
