import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useCart } from "react-use-cart";
import Router from "next/router";
import { useContext } from "react";
import FilterContext from "../contexts/FilterContext";
import { FaUser } from "react-icons/fa";

function Header() {
  const data = useContext(FilterContext);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
  });

  // Función para eliminar la información del usuario del Local Storage
  const clearUserInfo = () => {
    localStorage.removeItem("user_info");
    setUserInfo({
      firstName: "",
      lastName: "",
    });
  };

  const handleLogout = () => {
    // Llama a la función para limpiar la información del usuario
    clearUserInfo();
    // Redirige al usuario a la página de inicio de sesión o a donde desees
    Router.push("/login");
  };

  useEffect(() => {
    const userInfoString = localStorage.getItem("user_info");
    if (userInfoString) {
      const user = JSON.parse(userInfoString);
      setUserInfo(user);
    }
  }, []);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
  } = useCart();

  const handleSeacrh = () => {
    data.setProductsData(
      searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
    );

    Router.push(`/filter`);
  };

  const [productsQtde, setProductsQtde] = React.useState(0);
  const [empty, setEmpty] = React.useState(Object);
  const [searchQuery, setSearchQuery] = React.useState("");
  console.log(productsQtde);
  React.useEffect(() => {
    setProductsQtde(totalUniqueItems);
    setEmpty(isEmpty);
  }, [totalUniqueItems]);

  React.useEffect(() => {
    let menu: any = document.getElementById("side-menu");
    menu.style.display = "none";
  }, []);

  const handleClickMenu = () => {
    let menu: any = document.getElementById("side-menu");
    if (menu.style.display == "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  };

  const handleClickLink = () => {
    let menu: any = document.getElementById("side-menu");
    menu.style.display = "none";
  };

  return (
    <div>
      <div className={styles.containerPc}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>
              <Link href={"/"}>
                <Image
                  src={"/logos/LogoHeader.png"}
                  height="100"
                  width="100"
                  className={styles.logo}
                ></Image>
              </Link>
            </h2>
          </div>
          <div className={styles.filter}>
            <input
              type="text"
              placeholder="Busca al duende..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />

            <button onClick={() => handleSeacrh()} id="filterInp">
              <Image src={"/search.svg"} width="20px" height="20px"></Image>
            </button>
          </div>
          <div className={styles.cart}>
            <Link href={"/cart"}>
              <Image
                src={"/images/cart.svg"}
                height="40px"
                width="40px"
              />
            </Link>
            <span> {productsQtde}</span>
          </div>
          <div className={styles.loginIcon}>
            {userInfo.firstName ? (
              <div>
                <span>
                  {userInfo.firstName} {" "}
                </span>
                <a onClick={handleLogout}>Cerrar sesión</a>
              </div>
            ) : (
              <Link href="/login">
                <a>
                  <FaUser size={30} />
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className={styles.subContainer}>
          <ul>
            <Link href={"/"}>
              <li>Inicio</li>
            </Link>
            <Link href={"/filter/Erai"}>
              <li>Colección del duende "Erai"</li>
            </Link>
            <Link href={"/filter/DuendeSimp"}>
              <li>Duende Simp</li>
            </Link>
            <Link href={"/filter/DuendeJote"}>
              <li>Duende Casanova</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className={styles.containerMobile}>
        <div className={styles.headerMobile}>
          <div className={styles.titleMobile}>
            <h2>
              <Link href={"/"}>
                <Image src={"/logos/Duende.png"} height="100" width="100"></Image>
              </Link>
            </h2>
          </div>
          <div className={styles.wrapperIconsHeaderMobile}>
            <div
              className={styles.btnMenuMobile}
              onClick={() => handleClickMenu()}
            >
              <Image src={"/menuBtn.svg"} height="40px" width="40px" />
            </div>
            <div className={styles.cartIconMobile}>
              <Link href={"/cart"}>
                <Image src={"/images/cart.svg"} height="40px" width="40px " />
              </Link>
              <span> {productsQtde}</span>
            </div>
            <div className={styles.loginIcon}>
              {userInfo.firstName ? (
                <div>
                  <span>
                   
                  {"     "}  {userInfo.firstName} {"     "}  
                  </span>
                  <a onClick={handleLogout}>Cerrar sesión</a>
                </div>
              ) : (
                <Link href="/login">
                  <a>
                    <FaUser size={30} />
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={styles.subHeaderMobile}>
          <div className={styles.filter}>
            <input
              type="text"
              placeholder="Buscar al duende..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />

            <button onClick={() => handleSeacrh()} id="filterInp">
              <Image src={"/search.svg"} width="20px" height="20px"></Image>
            </button>
          </div>
        </div>

        <div className={styles.sideMenu} id="side-menu">
          <ul>
            <Link href={"/"}>
              <li onClick={() => handleClickLink()}>Inicio</li>
            </Link>
            <Link href={"/filter/Erai"}>
              <li>Colección del duende "Erai"</li>
            </Link>
            <Link href={"/filter/DuendeSimp"}>
              <li>Duende Simp</li>
            </Link>
            <Link href={"/filter/DuendeJote"}>
              <li>Duende Casanova</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

