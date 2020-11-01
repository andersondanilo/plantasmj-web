import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/NavMenu.module.scss";

export default function Navigator(): ReactElement {
  return (
    <nav className={styles.navContainer}>
      <Link href="/">
        <a className={styles.navButton}>Home</a>
      </Link>
      <Link href="/">
        <a className={styles.navButton}>Contato</a>
      </Link>
      <Link href="/">
        <a className={styles.navButton}>Orçamento</a>
      </Link>
      <Link href="/products">
        <a className={styles.navButton}>Produtos</a>
      </Link>
    </nav>
  );
}
