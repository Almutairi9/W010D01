import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Nav() {
  return (
    <div className={styles.div}>
      <ul className={styles.list}>
        <Link href="/">
          <li>
            <Image src="/tulip.jpeg" alt="logoImg" width={120} height={120} />
          </li>
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
    </div>
  );
}

export default Nav;
