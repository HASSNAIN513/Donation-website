"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { handler } from '@/app/actions/create-checkout-session'
import Paymentmodel from './Paymentmodel';
import { loadStripe } from '@stripe/stripe-js';
  import { ToastContainer, toast } from 'react-toastify';

import { info } from '@/user/user-actions';

const Paymentpage = ({ params }) => {
    const [id, setid] = useState()
    const [open, setopen] = useState(false)
    const [form, setform] = useState({ name: "", message: "", amount: 0 })
    const [list, setlist] = useState([])
    const [stripe, setstripe] = useState()
    const [name, setname] = useState()
    const [user, setuser] = useState()


const reset= ()=>{
setform({ name: "", message: "", amount: 0 })
}
    const getmessages = async () => {
        let res = await fetch('/api/Message', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: params })
        })
        let data = await res.json()


        setlist(data)

    }

    const getuser = async () => {
        let u = await info(params)

        setname(u.username)
        setuser(u)

    }

    useEffect(() => {
        getmessages()
        getuser()

    }, [])

    useEffect(() => {
        if (name) {
            const key = async () => {
                let p = await fetch(`/api/Message?name=${name}`)
                const { stripePublicKey } = await p.json()
                const stripeInstance = await loadStripe(stripePublicKey);
                setstripe(stripeInstance)
                
            }
            key()
        }

    }, [name])






    const handlechange = (e) => {

        const { name, value } = e.target
        setform({ ...form, [name]: value })
    }


    const handleamount = (e) => {
        const { name, value } = e.target
        setform({ ...form, [name]: Number(value) })
    }

    async function checkout() {


        if (form.amount < 100) {
            alert("Minimum amount is Rs 100 due to policies!")
            return;
        }

        // check if al the fields in form aree filled then only proceed
        if (!form.name || !form.message || !form.amount) {
            alert("Please fill all the fields")
            return;
        }
        let paymentform = { name: form.name, message: form.message }
        let res = await handler(form.amount, params, paymentform)


        setid(res)


        if (!stripe) {
            
            return;
        }
        const options = {
            clientSecret: id,
            appearance: {

                theme: "night",
                variables: {
                    colorPrimary: "#5b21b6",
                    colorBackground: "#0b1220",
                    colorText: "#ffffff",
                },
            },
        };


      

        setopen(true)

    }







    // Calculate total amount raised
    const totalRaised = list.reduce((sum, item) => sum + (item.amount || 0), 0);

    return (
      user && (<div>
            <div className='relative'>
                <div className=" cover  border border-blue-950 border-x-0">
                   {user &&  <img className='w-full h-[50vh]  object-cover' src={user.coverPicture? user.coverPicture:"https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"} alt="" />}
                </div>
                <div className=" absolute top-[100%] -translate-y-[50%] left-1/2 -translate-x-1/2 p-1 px-0 py-0 rounded-full">
                <img className='size-28 rounded-full' src={user.profilePicture? user.profilePicture:"https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"}  alt="" />
                </div>
            </div>
            <div className="flex justify-center mt-20 mb-10 md:mb-20  items-center flex-col  relative">
                <div><h2 className='text-lg tracking-wider font-bold'>@{name}</h2></div>
                <div className='mt-1  text-slate-400'>
                    Help {name} to buy a chai
                </div>
                <div className='mt-1 text-center text-slate-400'>
                    total payments are {list.length} and amount raised {totalRaised}
                </div>
            </div>
            <div className="method   container flex flex-col-reverse lg:flex-row mb-15 md:25 mt-5 w-full px-2  md:w-[80%] mx-auto gap-1 ">
                <div className="supporters md:w-1/2  scroll-hidden max-h-[65vh]   overflow-y-auto  bg-slate-900 p-10 rounded-lg">
                    <h2 className='text-lg font-bold mb-4'>Top 7 Supporters</h2>
                    <ul className='px-3 flex flex-col gap-4'>
                        {list.length == 0 && <li>No Payments to show!</li>}
                        {list.map((item, index) => {
                            return (<li key={index} className="flex gap-2"><lord-icon
                                src="https://cdn.lordicon.com/hhljfoaj.json"
                                trigger="hover"
                                style={{ "width": "30px", "height": "30px", }}>
                            </lord-icon>
                                <div> <span className='capitalize font-bold'>{item.name} </span> <span>donated</span><span className="font-bold"> Rs. {item.amount}</span> <span> — </span> <span className='tracking-wide  italic'>  &quot;{item.message}&quot;.</span></div>
                            </li>)

                        })}



                    </ul>
                </div>
                <div className="payment p-10  md:w-1/2 bg-slate-900 rounded-lg ">
                    <h2 className='text-lg font-bold mb-4'>Make a Payment</h2>
                    <div className='flex flex-col gap-2'>
                        <input type="text" onChange={handlechange} value={form.name} name='name' placeholder="Enter Name" className='p-2 w-full rounded-lg bg-slate-800 border border-slate-700' />
                        <input type="text" onChange={handlechange} value={form.message} name='message' placeholder="Enter Message" className='p-2 w-full rounded-lg bg-slate-800 border border-slate-700' />
                        <input
                            type='number'
                            onChange={handleamount}
                            value={form.amount === 0 ? "" : form.amount}
                            name="amount"
                            placeholder="Enter Amount"
                            className="p-2 w-full rounded-lg bg-slate-800 border border-slate-700"
                        />
                        <button type="button" onClick={checkout} className="text-white bg-gradient-to-r from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Pay</button>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        {/* or chose form these payments */}
                        <button type="button" onClick={() => { setform({ ...form, amount: 1000 }) }} className="text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm md:px-5 px-3 py-2.5 text-center mb-2">Rs 1000</button>
                        <button type="button" onClick={() => { setform({ ...form, amount: 2000 }) }} className="text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm md:px-5 px-3 py-2.5 text-center mb-2">Rs 2000</button>
                        <button type="button" onClick={() => { setform({ ...form, amount: 3000 }) }} className="text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm md:px-5 px-3 py-2.5 text-center mb-2">Rs 3000</button>
                    </div>
                </div>
            </div>

            {open && (
                <Paymentmodel clientSecret={id} reset={reset} stripePromise={stripe} open={open} onClose={() => setopen(false)} />
            )}
        </div>)
      
    )
}

export default Paymentpage
