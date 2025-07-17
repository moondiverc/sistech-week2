"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/app/types/ProductTypes";
import Footer from "@/app/ui/Footer";

const items: ProductProps[] = [
    {
        productId: "1",
        name: "Bumi",
        price: 95000,
        imageUrl: "/file.svg"
    },
    {
        productId: "2",
        name: "Bumi",
        price: 95000,
        imageUrl: "/file.svg"
    },
    {
        productId: "3",
        name: "Bumi",
        price: 95000,
        imageUrl: "/file.svg"
    },
    {
        productId: "4",
        name: "Bumi",
        price: 95000,
        imageUrl: "/file.svg"
    },
];

export default function Products() {
    const [cart, setCart] = useState<ProductProps[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

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
        <div className="h-screen">
            <div>
                <div className="flex flex-wrap gap-4 m-4 items-start ">
                    {items.map(({ name, price, productId, imageUrl }) => (
                        <div key={productId} className="bg-white rounded-lg p-4 flex flex-col">
                        <div>
                            <Image src={imageUrl} alt={name} width={200} height={200} />
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div>{price}</div>
                        </div>
                        <button className="bg-rose-300 text-white p-4 hover:bg-rose-200"
                        onClick={(e) =>
                            handleClick(e, { name, price, productId, imageUrl })}>
                        Add to cart
                        </button>
                    </div>
                    ))}
                </div>                
            </div>
                    {cart.length>0 && <Footer cart={totalPrice}/>}
        </div>
    )
}