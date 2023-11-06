import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import SliderComponent from "../components/Slider";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import SmBanners from "../components/SmBanners";
import DB from "../components/database";

export const getStaticProps: GetStaticProps = async (context) => {
   

  return {
    props: {
      data: "data",
    },
  };
};

const Home: NextPage = ({ data }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.containerHome}>
      <div className={styles.containerSlider}>
        <SliderComponent />
      </div>

      <div>
        <div className={styles.title}>
          <h2>Ultimas Poleras</h2>
        </div>
        <Slider {...settings} className={styles.container}>
          {DB.map((item) => (
            <Link href={`/Productos/${item.id}`} key={item.id}>
              <div className={styles.product}>
                <Image
                  src={item.image}
                  height={400}
                  width={300}
                  style={{ borderRadius: "10px" }}
                />
                <div className={styles.wrapperInfosTeam}>
                  <h2 className={styles.TeamName}>
                    {item.name}
                  </h2>
                </div>
                <div className={styles.wrapperPrice}>
                  <div className={styles.discountPrice}>CLP$12,990</div>
                  <div className={styles.rightPrice}>{item.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <SmBanners/>

      <div className={styles.about}>
        <h2>¿Quiénes somos?</h2>
        <p>El mercado de tiendas online de poleras personalizadas está muy saturado. Sin embargo, vimos que faltaba una empresa que transmitiera la confianza y la reciprocidad necesarias a sus clientes. De ahí surgió la idea de crear Duende Store. La mejor tienda de ropa hecha para dar una sensación única que te diferencie entre todos los que te rodean.</p>
        <p>En Duende Store, venimos para aportar una visión diferente al mercado, integrando tecnología, diseño y comodidad, todo para ofrecer la mejor calidad y experiencia a nuestros clientes.</p>
        <p>¡Echa un vistazo a nuestros productos! ¿Quieres una sugerencia para un amigo? Echa un vistazo a estas poleras que he seleccionado para ti, ¡te encantarán!</p>
      </div>
    </div>
  );
};

export default Home;
