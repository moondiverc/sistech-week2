import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white/50 rounded text-center">
      <h1>Haru Book</h1>
      <p>The best book store in the town</p>
      <Link href="./products" className="bg-white">Start Reading!</Link>
    </div>
  )
}
