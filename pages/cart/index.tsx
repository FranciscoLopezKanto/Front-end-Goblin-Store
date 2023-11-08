import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Cart.module.css";
import { useCart, Item } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    addItem,
    updateItemQuantity,
    removeItem,
  } = useCart();

  // Cargar el carrito desde el almacenamiento local al montar el componente
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart: Item[] = JSON.parse(savedCart);
      parsedCart.forEach((item) => {
        const { id, quantity } = item;
        // Verificar si el elemento ya está en el carrito antes de actualizar
        const existingItem = items.find((cartItem) => cartItem.id === id);
        if (existingItem) {
          updateItemQuantity(id, quantity || 1);
        }
      });
    }
  }, []);

  const handleCheckout = () => {

    
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Producto</th>
            <th className={styles.th}>Precio</th>
            <th className={styles.th}>Cantidad</th>
            <th className={styles.th}>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const total = item.price * (item.quantity || 1);
            return (
              <tr key={item.id}>
                <td className={styles.td}>
                  <div className={styles.productInfo}>
                    <Image width={200} height={250} src={`/poleras/${item.id}.png`} />
                    <div className={styles.productName}>{item.name}</div>
                  </div>
                </td>
                <td className={styles.td}>CLP$ {item.price}</td>
                <td className={styles.td}>
                  <div className={styles.qtdWrapper}>
                    <button
                      onClick={() => updateItemQuantity(item.id, (item.quantity || 1) - 1)}
                      className={styles.button1}
                    >
                      -
                    </button>
                    <div className={styles.qtd}>
                      {item.quantity?.toString() || "1"}
                    </div>
                    <button
                      onClick={() => updateItemQuantity(item.id, (item.quantity || 0) + 1)}
                      className={styles.button2}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className={styles.td}>CLP$ {total.toFixed(2).replace(".", ",")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.checkoutBox}>
        <div>
          <h3>Items en el carrito: {totalUniqueItems}</h3>
        </div>
        <div className={styles.subtotal}>
          Subtotal: <div>CLP$ {cartTotal.toFixed(2).replace(".", ",")}</div>
        </div>
        <hr />
        <div className={styles.total}>
          Total: <h3>CLP$ {cartTotal.toFixed(2).replace(".", ",")}</h3>
        </div>
        <button className={styles.btnFinalizar} onClick={() => handleCheckout()}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default Cart;
