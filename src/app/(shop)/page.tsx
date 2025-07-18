import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center py-50">
      <div className="bg-white/30 rounded-lg text-center inline-block p-10">
        <h1 className="font-bold text-2xl">HappyMart</h1>
        <h2>Your Ultimate Blind Box Destination in the City!</h2>
        <p>Discover a wide variety of collectible blind boxes — from popular anime figures to exclusive limited editions. Find your surprise, feel the thrill!</p>
        <div className="flex justify-center mt-4">
          <Link href="./products" className="bg-pink-200 rounded p-1 hover:bg-pink-100">Start Exploring!</Link>
        </div>
      </div>
    </main>
  )
}
