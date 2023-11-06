import React, {useEffect, useState} from 'react'
import { useCart } from "react-use-cart";
import styles from '../../styles/Success.module.css'


function SuccessPage() {
  const { emptyCart  } = useCart();
  const [cartProvisorio, setCartProvisorio] = useState({})
  

  useEffect(()=>{
      emptyCart()
  },[])


  return (
    <div className={styles.containerSuccess}>
      
      <p>tu pedido estara en un plazo maximo de 25 dias.</p>
      </div>
  )
}

export default SuccessPage