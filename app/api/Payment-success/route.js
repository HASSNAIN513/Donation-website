import { NextResponse } from "next/server";

import connectDB from "@/mongodb";
import Paymentnew from "@/models/Payment";




export const POST = async (request) => {
 
    await connectDB();
    const body = await request.json();
    const { paymentIntent } = body;
    
    

    if(!paymentIntent){
        return NextResponse.json({ message: "Payment Intent missing" }, { status: 400 });
    }
    if (paymentIntent.status === "succeeded") {
    
        await Paymentnew.findOneAndUpdate({ oid: paymentIntent.id }, { isdone: true, amount: paymentIntent.amount / 100 });
        return NextResponse.json({ message: "Payment successful and record updated" }, { status: 200 });
    }
    else{
        return NextResponse.json({ message: "Payment not successful" }, { status: 400 });
    }
   
}



