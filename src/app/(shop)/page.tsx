import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center py-35">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg text-center inline-block p-10 shadow-lg">
        <h1 className="font-bold text-5xl pb-4 text-gray-800">HappyMart</h1>
        <h2 className="text-gray-700">Your Ultimate Blind Box Destination in the City!</h2>
        <p className="text-gray-600">Discover a wide variety of collectible blind boxes — from popular anime figures to exclusive limited editions. Find your surprise, feel the thrill!</p>
        <div className="flex justify-center mt-4">
          <Link href="./products" className="bg-pink-200 rounded p-2 px-4 hover:bg-pink-100 transition-colors">Start Exploring!</Link>
        </div>
      </div>
    </main>
  )
}
