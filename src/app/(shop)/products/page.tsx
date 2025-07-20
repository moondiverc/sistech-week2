"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from 'react-feather';
import { items } from "@/app/data/products";
import { ProductProps } from "@/app/types/ProductTypes";
import Footer from "@/app/ui/Footer";       

export default function Products() {
    const [cart, setCart] = useState<ProductProps[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [liked, setLiked] = useState<string[]>([]);

    const toggleLike = (
        e: React.MouseEvent<HTMLElement>,
        item: ProductProps
    ) => {
        e.preventDefault();
        if (liked.includes(item.productId)) {
            setLiked(liked.filter((itemId) => itemId !== item.productId));
        } else {
            setLiked([...liked, item.productId]);
        }
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
                <div className="min-h-screen flex flex-wrap gap-4 m-4 items-start ">
                    {items.map(({ name, price, productId, imageUrl }) => (

                        // mapping product
                        <div key={productId} className="bg-white rounded-lg p-4 flex flex-col">
                        <Link href={`/products/${productId}`}>
                            <div className="cursor-pointer">
                                <Image src={imageUrl} alt={name} width={200} height={200} style={{ objectFit: 'cover' }} />
                            </div>
                        </Link>
                        <div>
                            <Link href={`/products/${productId}`}>
                                <div className="font-bold text-black hover:text-pink-600 cursor-pointer">{name}</div>
                            </Link>
                            <div className="text-gray-600">Rp {price.toLocaleString('id-ID')}</div>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                            {/* tombol add to cart */}
                            <button className="bg-rose-300 text-white px-5 py-2 hover:bg-rose-200" onClick={(e) => handleClick(e, { name, price, productId, imageUrl })}>
                                Add to Cart
                            </button>
                            {/* tombol like */}
                            <button onClick={(e) => toggleLike(e, { name, price, productId, imageUrl })}>
                                <Heart size={45} className={`${liked.includes(productId) ? 'text-pink-500 fill-pink-500' : 'text-black'}`} />
                            </button>
                        </div>
                    </div>
                    ))}
                </div>                
            </div>
            {/* footer */}
            {cart.length>0 && <Footer cart={totalPrice}/>}
        </div>
    )
}