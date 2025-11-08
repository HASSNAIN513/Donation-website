"use client"
import React from 'react'

import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [toogle, settoogle] = useState(false)



    return (
        <nav className='flex justify-between flex-col md:flex-row gap-2 items-center px-1 py-1 md:px-4 md:h-16 bg-[#101826] text-white'>
            <Link href={"/"}><div className="logo text-lg flex items-center gap-2 font-bold cursor-pointer">
                <span className='text-2xl md:3xl'>GetMeaCHai!</span>
                <span>
                    <img
                        className="rounded-full p-2 bg-black"
                        width={40}
                        height={40}
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjQwbmZxc3Z2ZXU5Z3U2YWFzaDYxZW50d3VjeWlpeXc4dm42ODVrNiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Ga6kasHETjPG3jtlG8/giphy.gif"
                        alt="Animated man"

                    />
                </span>
            </div></Link>
            <div className="links flex items-center">

                <div>{session && <>
                    <button id="dropdownDefaultButton" onBlur={() => setTimeout(() => settoogle(false), 250)} onClick={() => { settoogle(!toogle) }} data-dropdown-toggle="dropdown" className="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>


                    <div id="dropdown" onBlur={() => settoogle(false)} className={` z-10 ${toogle ? "block" : "hidden"}  absolute top-23
                    md:top-15 right-4 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 `}>

                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
                            </li>

                            <li>
                                <Link href="#" onClick={() => signOut({ callbackUrl: "/Login" })} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </>}
                </div>




                {!session && <> <Link href={"/Login"}>

                    <button type="button" className="text-white relative  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mx-3 my-1 md:my-0 cursor-pointer ">Login</button>
                </Link></>}

            </div>

        </nav>
    )
}

export default Navbar
