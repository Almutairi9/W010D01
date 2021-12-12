import Link from "next/link";

function Nav () {
  return (
    <ul>
      <Link href="/">
        <li> Home</li>
      </Link>
      <Link href="/about">
        <li> About</li>
      </Link>
      <Link href="/contac">
        <li> Contact</li>
      </Link>
      <Link href="/post">
        <li> Post</li>
      </Link>
    </ul>
  );
};

export default Nav;
