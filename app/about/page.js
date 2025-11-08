
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      {/* Logo */}
     <lord-icon
  src="https://cdn.lordicon.com/tonguyuk.json"
  trigger="hover"
  colors={ {Primary: "#ebe6ef", Secondary: "#ffffff", Tertiary: "#000000"} }
  style={{ width: "150px", height: "150px" }}
></lord-icon>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-white mb-4">About Our Website</h1>

      {/* Intro */}
      <p className="text-lg text-white max-w-2xl text-center mb-8">
        Welcome to <span className="font-semibold text-blue-400">Our Platform</span>! 
        We are here to support creators, developers, and dreamers by making it easy 
        for anyone to show appreciation. Whether you’re a writer, artist, or coder, 
        we help you connect with your supporters in a warm and meaningful way.
      </p>

      {/* Info Box */}
      <div className="rounded-xl shadow-md p-8 max-w-3xl mb-8 bg-white/10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-2">Our Mission</h2>
        <p className="text-white mb-4">
          We believe in the power of small gestures. A simple contribution is more than 
          just support—it’s a symbol of gratitude, encouragement, and community.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mb-2">How It Works</h2>
        <ul className="list-disc list-inside text-white mb-4">
          <li>Create your profile and share your story.</li>
          <li>Share your unique link with your audience.</li>
          <li>Receive support and heartfelt messages from your community.</li>
          <li>Keep growing and doing what you love!</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-400 mb-2">Why Us?</h2>
        <p className="text-white">
          Our platform is built around warmth, comfort, and connection. 
          Just like sharing chai, it’s about creating meaningful bonds between 
          creators and supporters.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold text-white mb-2">Join Us!</h3>
        <p className="text-white mb-4 max-w-xl text-center">
          Ready to support your favorite creator or start your own journey? 
          Be part of a growing community that believes in kindness, creativity, 
          and connection.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutPage;



// ...existing code...

export const metadata = {
  title: "About | Buy Me A Chai",
  description: "Learn about Buy Me A Chai, our mission, and how we help creators connect with their supporters.",
  keywords: ["about", "buy me a chai", "mission", "creators", "support"],
  openGraph: {
    title: "About | Buy Me A Chai",
    description: "Learn about Buy Me A Chai, our mission, and how we help creators connect with their supporters.",
    url: "https://yourdomain.com/about",
    siteName: "Buy Me A Chai",
    type: "website",
  },
};