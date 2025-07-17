import Image from "next/image";
import Link from "next/link";

interface FooterProps {
    cart?: number;
}

export default function Footer({ cart = 0}: FooterProps) {
    return <footer className="bg-pink-300 text-white fixed bottom-0 w-full px-4 py-2">
        {cart > 0 && 
        <div className="flex bg-rose-100 justify-between items-center px-2 py-2 max-w-md mx-auto rounded-3xl">
            <div className="font-bold p-1">Total: Rp {cart}</div>
            <div className="">
                <Link href="./contact">
                <Image
                    src="/arrow.png"
                    alt="Logo"
                    width={30}
                    height={30}
                />
                </Link>
            </div>
        </div>
        }
    </footer>;
}