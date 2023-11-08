import React, { useContext } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Filtro.module.css";
import database from "../../components/database"; // Importa el array desde el nuevo archivo
import FilterContext from "../../contexts/FilterContext";

export const getStaticProps: GetStaticProps = async (context) => {
  // No necesitas una petición externa ya que los datos están en el array database

  return {
    props: {
      data: database, // Usa el array directamente
    },
  };
};

function Filter({ data }: any) {
  const dataContext = useContext(FilterContext);

  const dataFiltered = data.filter((i: any) =>
    i.name.includes(dataContext.state.data)
  );

  if (dataFiltered.length === 0) {
    return (
      <div>
        {data.map(
          (i: {
            image: any; // Asegúrate de que image sea del tipo correcto
            name: string;
            price: string;
            id: number;
            description: string;
            description_large: string;
          }) => (
            <Link href={`/${i.id}`} key={i.id}>
              <div className={styles.product}>
                <Image
                  src={i.image} // Usa i.image directamente
                  height={500}
                  width={400}
                  style={{ borderRadius: "10px" }}
                />
                <div className={styles.wrapperInfosTeam}>
                  <h2 className={styles.TeamName}>
                    {i.name}
                  </h2>
                </div>
                <div className={styles.wrapperPrice}>
                  <div className={styles.discountPrice}>R$350,00</div>
                  <div className={styles.rightPrice}> R${i.price},99</div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    );
  }

  return (
    <div className={styles.containerProducts}>
      {dataFiltered.map(
        (i: {
          image: any; // Asegúrate de que image sea del tipo correcto
          name: string;
          price: string;
          id: number;
          description: string;
          description_large: string;
        }) => (
          <Link href={`/${i.id}`} key={i.id}>
            <div className={styles.product}>
              <Image
                src={i.image} // Usa i.image directamente
                height={400}
                width={300}
                style={{ borderRadius: "10px" }}
              />
              <div className={styles.wrapperInfosTeam}>
                <h2 className={styles.TeamName}>
                  {i.name}
                </h2>
              </div>
              <div className={styles.wrapperPrice}>
                <div className={styles.discountPrice}>CLP$12,990</div>
                <div className={styles.rightPrice}> CLP${i.price}</div>
              </div>
            </div>
          </Link>
        )
      )}
     
      <div className={styles.dontFind}>
        <h2>No encontraste lo que necesitabas?😢</h2>
        <p>Mandanos un DM al Instagram, <Link href="https://www.instagram.com/llanura_de.kanto" rel='next' target="_blank">clicando aquí</Link></p>
      </div>
    </div>
  );
}

export default Filter;
