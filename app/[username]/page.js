




import React from 'react'
import Paymentpage from '@/components/Paymentpage'

const Page = async ({ params }) => {
    const user = await params

    return (
        <>
            <Paymentpage params={user.username} />
        </>
    )
}

export default Page
export const metadata = {
    title: "Profile | Buy Me A Chai",
    description: "View and support this creator on Buy Me A Chai. Donate and leave a message!",
    keywords: ["profile", "buy me a chai", "support", "creator"],
    openGraph: {
        title: "Profile | Buy Me A Chai",
        description: "View and support this creator on Buy Me A Chai. Donate and leave a message!",
        url: "https://yourdomain.com/[username]",
        siteName: "Buy Me A Chai",
        type: "profile",
    },
};