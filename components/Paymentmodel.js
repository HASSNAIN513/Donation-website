"use client";
import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";


const PaymentModal = ({ clientSecret,stripePromise,reset, open, onClose }) => {
  if (!open || !clientSecret) return null;


  return (
    <div className="  absolute w-full top-[90%] max-h-screen inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
      <div className="bg-slate-900 md:w-1/2 rounded-2xl shadow-lg p-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-white text-center">
          Complete Your Payment
        </h2>

        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Checkoutform onClose={onClose} reset={reset} clientSecret={clientSecret}  />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentModal;
