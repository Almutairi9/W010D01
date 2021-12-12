import Link from "next/link";
import styles from '../../styles/Home.module.css'

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

function Post({ posts }) {
  return (
   <>
      {posts.map((post) => (
        <div key={post.id} className={styles.cards}>
        <Link href={`post/${post.id}`}>
          <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </>
        </Link>
        </div>
      ))}
   </>
  );
}

export default Post;
