"use server"

import stripe from "stripe"
import Paymentnew from "@/models/Payment"
import User from "@/models/User"
import connectdb from "@/mongodb"



export const handler= async(amount,to_username,paymentform)=>{
    await connectdb()
    const user= await User.findOne({username:to_username})
    const secret= user.stripeSecret

    const instance = new stripe(secret)
    
    

    let options={
        amount: amount * 100,   
  currency: "pkr",        
  payment_method_types: ["card"],
    }

    let x= await instance.paymentIntents.create(options)

    
    await Paymentnew.create({
        to:to_username,
        name:paymentform.name,
        message:paymentform.message,
        from:paymentform.name,
        oid:x.id,
        amount:amount
        
    })
 

    return x.client_secret
}