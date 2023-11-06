import React from 'react'
import { GetStaticProps } from "next";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import styles from "../../../styles/Filtro.module.css";
import database from "../../../components/database";

interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  price: string;
  description: string;
  description_large: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const filteredData = database.filter((product: Product) => product.name.toLowerCase().includes("erai"));

  return {
    props: {
      data: filteredData,
    }
  };
};

function Erai({ data }: { data: Product[] }) {
  return (
    <div className={styles.containerProducts}>
      {data.map((product: Product) => (
        <Link href={`/Productos/${product.id}`} key={product.id}>
          <div className={styles.product}>
            <Image
              src={product.image}
              height={400}
              width={300}
              style={{ borderRadius: "10px" }}
            ></Image>
            <div className={styles.wrapperInfosTeam}>
              <h2 className={styles.TeamName}>
                {product.name}
              </h2>
            </div>
            <div className={styles.wrapperPrice}>
              <div className={styles.discountPrice}>CLP$12.990</div>
              <div className={styles.rightPrice}>CLP${parseFloat(product.price).toLocaleString("es-CL", {
                  minimumFractionDigits: 0, // Mínimo de dígitos en la parte decimal
                  maximumFractionDigits: 0, // Máximo de dígitos en la parte decimal
              })}
              </div>
              
            </div>
          </div>
        </Link>
      ))}
      

      <div className={styles.dontFind}>
        <h2>No encontraste lo que necesitabas?😢</h2>
        <p>Mandanos un DM al Instagram, <Link href="https://www.instagram.com/llanura_de.kanto" rel='next' target="_blank">clicando aquí</Link></p>
      </div>
    </div>
  );
}

export default Erai;
