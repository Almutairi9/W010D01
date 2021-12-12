import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  const backHome = () => router.push("/");
  return (
    <>
      <h1>404</h1>
      <h2>the page you're looking for is not found</h2>
      <button onClick={backHome}>Back to home</button>
    </>
  );
};

export default NotFound;