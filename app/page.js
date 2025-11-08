


import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-[44vh] mt-5 flex flex-col gap-5 justify-center items-center text-center px-4">
        <div className="flex items-center justify-center gap-2">
          <h2 className="md:text-3xl text-2xl  font-bold">Buy Me A Chai</h2>


          <span>
            <img
              className="rounded-full p-2 md:w-20 w-12 bg-black"

              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjQwbmZxc3Z2ZXU5Z3U2YWFzaDYxZW50d3VjeWlpeXc4dm42ODVrNiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Ga6kasHETjPG3jtlG8/giphy.gif"
              alt="Animated man"

            />
          </span>
        </div>
        {/* discription about the platform*/}
        <p className="mt-1 text-center text-lg">
          GetMeaChai is a simple donation website where you can donate for a cause.
        </p>
        <div className="my-8">
          <Link href="/Login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-3 cursor-pointer ">Start Here</button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-3 cursor-pointer ">About us</button>
          </Link>

        </div>



      </div>
      <div className="bg-white opacity-10 h-1"></div>

      <div className=" container mx-auto py-10 md:py-20">
        <h1 className="text-2xl font-bold text-center my-10">Your Fans can buy you a Chai</h1>

        <div className="items flex justify-around items-center  ">
          <div className="item flex flex-col gap-2 justify-center items-center text-center px-2 md:px-4">
            <div className="bg-[#e6f4ea] flex rounded-full overflow-hidden w-[80px] h-[80px]">
              <Image
                className="rounded-full object-cover "
                width={100}
                height={100}
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3V5NTkzamNycHRxOXFpNWxvMmZwZ3RocncwbGE5bThob2N1cGtocSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/kSUQbZET4olqUX27vD/giphy.gif"
                alt="Animated man"
                priority
              />
            </div>
            <p className="font-bold"> Fans want to help</p>
            <p className="text-center">Support your favorite content creator by buying them a chai!</p>
          </div>
          <div className="item flex flex-col gap-2 justify-center items-center text-center px-2 md:px-4">
            <div className="bg-[#e6f4ea] flex rounded-full overflow-hidden w-[80px] h-[80px]">
              <Image
                className="rounded-full object-cover "
                width={100}
                height={100}
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3V5NTkzamNycHRxOXFpNWxvMmZwZ3RocncwbGE5bThob2N1cGtocSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/kSUQbZET4olqUX27vD/giphy.gif"
                alt="Animated man"
                priority
              />
            </div>
            <p className="font-bold"> Fans want to help</p>
            <p className="">Support your favorite content creator by buying them a chai!</p>
          </div>
          <div className="item flex flex-col gap-2 justify-center items-center text-center px-2 md:px-4">
            <div className="bg-[#e6f4ea] flex rounded-full overflow-hidden w-[80px] h-[80px]">
              <Image
                className="rounded-full object-cover "
                width={100}
                height={100}
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3V5NTkzamNycHRxOXFpNWxvMmZwZ3RocncwbGE5bThob2N1cGtocSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/kSUQbZET4olqUX27vD/giphy.gif"
                alt="Animated man"
                priority
              />
            </div>
            <p className="font-bold"> Fans want to help</p>
            <p className="">Support your favorite content creator by buying them a chai!</p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>


      <div className=" container mx-auto py-12 flex items-center justify-center gap-8 flex-col">
        <h1 className="text-2xl font-bold text-center ">Learn more about us</h1>
        <div className=" px-3 pt-2 w-full h-[40vh] md:min-h-[75vh]  md:w-[40%] lg:w-[50%]">
          <iframe className="w-full h-full"  src="https://www.youtube.com/embed/zOjov-2OZ0E?si=VroJVTDijoc7vE-c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>





      </div>



    </>
  );
}

export const metadata = {
  title: "Buy Me A Chai | Home",
  description: "GetMeaChai is a simple donation website where you can donate for a cause. Support your favorite creators by buying them a chai!",
  keywords: ["donation", "chai", "support creators", "buy me a chai", "GetMeaChai"],
  openGraph: {
    title: "Buy Me A Chai | Home",
    description: "Support your favorite creators by buying them a chai!",
    siteName: "Buy Me A Chai",
    type: "website",
  },
};