import { Component } from "solid-js";

import styles from "./_navbar.module.scss";
import { Link } from "@solidjs/router";

export const Navbar: Component = () => {
  return (
    <nav class={styles.navbar}>
      <ul class={styles.navList}>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};
