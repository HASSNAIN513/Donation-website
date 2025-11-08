

"use client"
import React from 'react'
import { useSession, signIn, signOut, } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react'
  import { ToastContainer, toast,Bounce } from 'react-toastify';
import { updateprofile, info } from '@/user/user-actions'



const page = () => {
  const [formData, setFormData] = useState({name:"",username:"",coverPicture:" ",profilePicture:" ",stripeId:"",stripeSecret:""})
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/Login")

    }
     
if(session){
 fetchdata()
}

  }, [session])


  const fetchdata = async () => {
    const data = await info( session.user.name)
    setFormData({
      ...formData,
      coverPicture: data.coverPicture || "",
      profilePicture: data.profilePicture || "",
      stripeId: data.stripeId || "",
      stripeSecret: data.stripeSecret || "",
      name: data.name || "",
      username: data.username || "",
      
    })
  }




  const handledata = async (e) => {

    await updateprofile(formData, session.user.name)
   
    toast('Profile updated successfully', {
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
    
    

  }




  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>


      <div className="md:w-3/4 w-full px-3 mx-auto h-full  shadow-sm rounded-lg p-2 mt-10 mb-15">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to your Dashboard</h1>
        <form action={handledata} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="border outline-none p-2 rounded focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username || ""}
              onChange={(e) => {
               
                const value = e.target.value.replace(/\s/g, "");
                setFormData({ ...formData, username: value });
              }}
              className="border outline-none p-2 rounded focus:outline-none focus:ring"
              required
            />
            {formData.username && /\s/.test(formData.username) && (
              <span className="text-red-500 text-sm mt-1">Username cannot contain spaces.</span>
            )}
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="coverPicture" className="mb-1 font-medium">Cover Picture URL</label>
            <input
              type="text"
              id="coverPicture"
              name="coverPicture"
              required

              value={formData.coverPicture}
              onChange={handleChange}
              className="border outline-none p-2 rounded focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="profilePicture" className="mb-1 font-medium">Profile Photo URL</label>
            <input
              type="text"
              id="profilePicture"
              name="profilePicture"
required
              value={formData.profilePicture}
              onChange={handleChange}
              className="border outline-none p-2 rounded focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="stripeId" className="mb-1 font-medium">Stripe ID</label>
            <input
              type="text"
              id="stripeId"
              name="stripeId"
              value={formData.stripeId}
              onChange={handleChange}
              className="border outline-none p-2 rounded focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="stripeSecret" className="mb-1 font-medium">Stripe Secret</label>
            <input
              type="text"
              id="stripeSecret"
              name="stripeSecret"

              value={formData.stripeSecret}
              onChange={handleChange}
              className="border outline-none p-2 rounded focus:outline-none focus:ring"
            />
          </div>
          <button disabled={formData.username && /\s/.test(formData.username)}
           className="bg-blue-700 cursor-pointer disabled:bg-gray-500 text-white w-full px-4 py-2 rounded-lg mt-4 hover:bg-blue-900 font-semibold transition">
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default page



