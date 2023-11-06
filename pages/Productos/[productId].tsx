import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import Slider from "react-slick";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import database from "../../components/database";

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    description_large: string; // Agregamos la descripción larga
    price: number;
    image: string;
  };
}

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const productId = params.productId;

  const product = database.find((p: any) => p.id.toString() === productId);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = database.map((product: any) => ({
    params: {
      productId: product.id.toString(),
    },
  }));

  return { paths, fallback: false };
};

function Product({ product }: ProductProps) {
  const { addItem } = useCart();

  const settings = {
    customPaging: function (i: number) {
      return (
        <div className={styles.sliderOpt}>
          <Image src={product.image} height={500} width={500} />
        </div>
      );
    },
    dots: true,
    infinite: true,
    dotsClass: "slick-dots custom-indicator",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [size, setSize] = useState<string | null>(null);
  const [number, setNumber] = useState<number | null>(null);
  const [namePerso, setNamePerso] = useState<string | null>(null);
  const [qtde, setQtde] = useState(1);

  const { items } = useCart();

  function handleClickBtn(e: React.MouseEvent<HTMLDivElement>) {
    setSize(e.currentTarget.textContent);
  }

  function handleChangeNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(parseInt(e.target.value));
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setNamePerso(e.target.value);
  }

  function handleChangeQtde(e: React.ChangeEvent<HTMLSelectElement>) {
    setQtde(parseInt(e.target.value));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (size === null) {
      toast.warn("Elige el tamaño de la ropa po!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const item = {
        id: product.id + (namePerso || "") + (number || ""),
        size: size,
        name: product.name,
        description: product.description,
        price: product.price,
      };

      addItem(item, qtde);

      console.log("Carrito actual:", items);

      toast.success("Producto agregado al carrito!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <>
      <div className={styles.container}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Slider {...settings} className={styles.slider}>
          {[1, 2, 3].map((index) => (
            <div key={index}>
              <Image src={product.image} height={650} width={500} />
            </div>
          ))}
        </Slider>

        <div className={styles.Infos}>
          <h2>{product.name}</h2>
          <h2 className={styles.value}>CLP${parseFloat(product.price).toLocaleString("es-CL")}</h2>

          {/* Agregamos la descripción y la descripción larga aquí */}
          <p>{product.description}</p>
          <p>{product.description_large}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.size}>
              <p>
                Tamaño seleccionado: <span>{size}</span>{" "}
              </p>
            </div>
            <div className={styles.buttonsWrapper}>
              <div
                className={styles.buttons}
                onClick={(e) => handleClickBtn(e)}
              >
                XS
              </div>
              <div className={styles.buttons} onClick={(e) => handleClickBtn(e)}>
                S
              </div>
              <div className={styles.buttons} onClick={(e) => handleClickBtn(e)}>
                M
              </div>
              <div className={styles.buttons} onClick={(e) => handleClickBtn(e)}>
                L
              </div>
              <div className={styles.buttons} onClick={(e) => handleClickBtn(e)}>
                XL
              </div>
              <div className={styles.buttons} onClick={(e) => handleClickBtn(e)}>
                XXL
              </div>
            </div>

            <div className={styles.wrapperInps}>
              <select
                className={styles.select}
                onChange={(e) => handleChangeQtde(e)}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" name="Comprar" className={styles.comprar}>
              Comprar
            </button>
          </form>
        </div>
      </div>

      <div className={styles.sizeTable}>
        <h3>Tabla de medidas</h3>
        <table>
          <thead>
            <tr>
              <th>Tamaño</th>
              <th>Medida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS</td>
              <td>x50cm</td>
            </tr>
            <tr>
              <td>S</td>
              <td>71x52cm</td>
            </tr>
            <tr>
              <td>M</td>
              <td>74x54cm</td>
            </tr>
            <tr>
              <td>L</td>
              <td>77x56cm</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>80x58cm</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>83x60cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Product;
