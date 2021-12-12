import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

function Post({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`post/${post.id}`} key={post.id}>
          <li>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Post;
