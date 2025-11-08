"use server"

import connectDB from "@/mongodb";
import { NextResponse } from "next/server";
import Paymentnew from "@/models/Payment";
import User from "@/models/User"; 

export const POST = async (request) => {
 
    await connectDB();
    const body = await request.json();

    

    const { username } = body;
   
    
    try{
        let messages= await Paymentnew.find({ to: username });
        messages = messages.filter(msg => msg.isdone === true);
        // only extracting message , amount and name from the data and then sending it to the frontend
        
        messages = messages.map(msg => {
            return { message: msg.message, amount: msg.amount, name: msg.name }
        })
        messages= messages.sort((a,b)=> b.amount-a.amount)
        messages = messages.slice(0, 8);
        
        
        

       

        return NextResponse.json(messages, { status: 200 });
    }catch(err){
        
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}


export const GET = async (req)=>{
     await connectDB();
    const {searchParams}= new URL(req.url)
    
     const name= searchParams.get("name")

  // Fetch user from database
  const user= await User.findOne({username:name})

  

  if (!user || !user.stripeId) {
    throw new Error("Stripe public key not found for user");
  }

  // Store the Stripe public key


  return NextResponse.json({stripePublicKey:user.stripeId})
}