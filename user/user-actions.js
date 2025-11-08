"use server"

import User from "@/models/User";
import Paymentnew from "@/models/Payment";

import connectDB from "@/mongodb";


export async function info(username) {

  await connectDB()
  try {
    let user = await User.findOne({ username })


    //    convert user into object type then send it to frontend

    user = JSON.parse(JSON.stringify(user))


    return user
  }
  catch (err) {  return null }

}

export async function updateprofile(p, old) {
  await connectDB()
  let user = await User.findOne({ username: old })

 
  if (p.username !== old) {
    let check = await User.findOne({ username: p.username })

    if (check) {

      return "user aready exists"
    }


  }
  
  await User.updateOne({ username: user.username }, p)
   
  await Paymentnew.updateMany({to:old}, {to:p.username})


 

}


