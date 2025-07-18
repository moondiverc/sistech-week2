"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from 'react-feather';
import { ProductProps } from "@/app/types/ProductTypes";
import Footer from "@/app/ui/Footer";

const items: ProductProps[] = [
    {
        productId: "1",
        name: "The Monsters",
        price: 500000,
        imageUrl: "/product1.png"
    },
    {
        productId: "2",
        name: "Have A Seat",
        price: 450000,
        imageUrl: "/product2.png"
    },
    {
        productId: "3",
        name: "Crying Again",
        price: 200000,
        imageUrl: "/product3.png"
    },
    {
        productId: "4",
        name: "SMISKI",
        price: 150000,
        imageUrl: "/product4.png"
    },
    {
        productId: "5",
        name: "The Powerpuff Girls",
        price: 175000,
        imageUrl: "/product5.png"
    },
    {
        productId: "6",
        name: "Growing Up by Your Way",
        price: 150000,
        imageUrl: "/product6.png"
    },
    {
        productId: "7",
        name: "Pino Jelly",
        price: 100000,
        imageUrl: "/product7.png"
    },
];

export default function Products() {
    const [cart, setCart] = useState<ProductProps[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [liked, setLiked] = useState(false)

    const toggleLike = (
        e: React.MouseEvent<HTMLElement>,
        item: ProductProps
    ) => {
        e.preventDefault();
        setLiked(!liked);
    }

    const handleClick = (
        e: React.MouseEvent<HTMLElement>,
        item: ProductProps
    ) => {
        e.preventDefault();
        setCart([...cart, item]);
    };

    useEffect(() => {
        if (cart.length>0) {
            const newPrice = cart.reduce((a, b) => ({
                price: a.price +b.price,
                productId: a.productId,
                imageUrl: a.imageUrl,
                name: a.name
            }));
            setTotalPrice(newPrice.price)
        }
    }, [cart]);

    return (
        <div className="h-full">
            <div>
                <div className="flex flex-wrap gap-4 m-4 items-start ">
                    {items.map(({ name, price, productId, imageUrl }) => (
                        <div key={productId} className="bg-white rounded-lg p-4 flex flex-col">
                        <div>
                            <Image src={imageUrl} alt={name} width={200} height={200} style={{ objectFit: 'cover' }} />
                        </div>
                        <div>
                            <div className="font-bold text-black">{name}</div>
                            <div className="text-gray-600">{price}</div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <button className="bg-rose-300 text-white p-2 my-2 hover:bg-rose-200"
                                onClick={(e) =>
                                handleClick(e, { name, price, productId, imageUrl })}>
                                Add to cart
                            </button>
                            <button onClick={(e) => toggleLike(e, { name, price, productId, imageUrl })}>
                                <Heart size={45} className={`${liked ? 'text-pink-500 fill-pink-500' : 'text-black'}`} />
                            </button>
                        </div>
                    </div>
                    ))}
                </div>                
            </div>
                    {cart.length>0 && <Footer cart={totalPrice}/>}
        </div>
    )
}