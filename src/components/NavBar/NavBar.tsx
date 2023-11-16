import React from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
    <header>
      <nav>
        <a href="#"></a>
        <ul>
          <li>
            <a href="#" className={styles.current}>
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
};
