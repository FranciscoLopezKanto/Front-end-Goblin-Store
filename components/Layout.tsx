import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css"; 

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
