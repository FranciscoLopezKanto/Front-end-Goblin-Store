import React from "react";
import Image from "next/image";
import styles from '../styles/Banners.module.css';
import Link from "next/link";

function SmBanners() {
  return (
    <div  className={styles.banners}>
      <div className={styles.banner}>
        <Link href={'/filter/DuendeSimp'}>
          <Image src={"/banners/BANNERS_05.png"} height="500px" width="500px" />
        </Link>
      </div>
      <div className={styles.banner}>
        <Link href={'/filter/DuendeJote'}>
          <Image src={"/banners/BANNERS_03.png"} height="500px" width="500px" />
        </Link>
      </div>
      <div className={styles.banner}>
        <Link href={'/filter/Erai'}>
          <Image src={"/banners/BANNERS_01.png"} height="500px" width="500px" />
        </Link>
      </div>
    </div>
  );
}

export default SmBanners;
