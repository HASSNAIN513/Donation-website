"use client";
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useRouter } from "next/navigation";



import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";


const CheckoutForm = ({ onClose ,reset}) => {
  const stripe = useStripe();
  const router= useRouter()
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {

      },
      redirect: "if_required",


    });



    await fetch("/api/Payment-success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentIntent, }),
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      onClose();
      router.refresh();
      

    }

    
    setLoading(false);
    if (!error) {
  toast.success("Payment Successful!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  reset()

}

  };

  return (
    <>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <PaymentElement />

        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}

        <button
          disabled={!stripe || loading}
          className="bg-purple-700 text-white px-4 py-2 rounded-lg mt-2 hover:bg-purple-800 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
