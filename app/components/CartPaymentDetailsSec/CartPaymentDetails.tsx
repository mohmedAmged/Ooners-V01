"use client"
import React, { useEffect, useState } from 'react'
import styles from './cartPaymentDetails.module.css'
import Image from 'next/image'
// import build from '../../imgs/payment/build.png'
import deleteIcon from '../../imgs/payment/mynaui_trash.png'
import useShowCartStore from '@/app/store/ShowCart'
import useDeleteCartItem from '@/app/store/DeleteCartItem'
// import useCheckoutStore from '@/app/store/CheckoutStore'
import { toast } from 'react-toastify'
import Cookies from "js-cookie";
import { baseURL } from '@/app/functions/baseUrl'
import axios from 'axios'

export default function CartPaymentDetails() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const { cart, fetchCart } = useShowCartStore();
  // const { checkout } = useCheckoutStore();

  useEffect(() => {
      fetchCart(); 
  }, [fetchCart]);

  console.log(cart);

  const { deleteCartItem } = useDeleteCartItem();

  const handleDelete = async (itemId: number) => {
    try {
        await deleteCartItem(itemId);
        fetchCart();
    } catch (error) {
        console.error("Error deleting cart item:", error);
    }
};
const token = Cookies.get("auth_token");

const handleCheckout = async (currPayment: string) => {

  if (!token) {
    toast.error("Authentication token is missing.");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("payment_method", currPayment); 
     await axios.post(`${baseURL}/checkout`,formData, {
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    

    toast.success("Checkout successful!");
    fetchCart(); 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || error.message || "An unknown error occurred.";
    toast.error(errorMessage); // Show error message in toast
  }
};


  return (
    <div className= {`${styles.allCart__handler}`}>
      { 
      cart?.length !== 0 ?
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cart?.items.map((el: any)=>(
          <div key={el?.id} className={`${styles.cartPayment__handler}`}>
            <div className={styles.cartCardItem}>
                  <div className={styles.cartCardAction}>
                      <Image onClick={()=>handleDelete(el?.id)} src={deleteIcon} alt='delete'/>
                  </div>
                  <div className={styles.cartCardMainInfo}>
                      <Image 
                      width={400} height={300} 
                      src={el?.property?.main_image} 
                      // src={build}
                      alt='build'/>
                      <div className={styles.cartCardDetails}>
                          <h2>
                              {el?.property?.title}
                          </h2>
                          <p>
                          {el?.property?.short_description}
                          </p>
                      </div>
                  </div>
            </div>
            <div className={styles.cartCardMainAction}>
              <div className={styles.totalPay}>
                  <p>
                      Amount
                  </p>
                  <p>
                      €{el?.investment_amount}
                  </p>
              </div>
            </div>
          </div>
        ))
        : 
        <div className={`${styles.emptyCart_text}`}>Cart is empty</div>
      }
       {
        cart?.length !== 0 && token &&
        <>
        <div className={styles.cartCardMainAction}>
              <div className={styles.totalPay}>
                  <p>
                      Total Properties
                  </p>
                  <p>
                      {cart?.total_items}
                  </p>
              </div>
              <div className={styles.totalPay}>
                  <p>
                      Total Invest
                  </p>
                  <p>
                      €{cart?.total_value}
                  </p>
              </div>
        </div>
        <button type='button' onClick={()=>handleCheckout('wallet')} >
            Pay Now
        </button>
        </>
       }
    </div>
   
  )
}
