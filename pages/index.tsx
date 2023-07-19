import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Store</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>All products</h2>
      </main>

      <footer className={styles.footer}>Made by Kayano</footer>
    </div>
  );
}
