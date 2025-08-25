import Image from "next/image";
import Link from "next/link";
import { items } from "@/app/data/products";

export default function ProductDetail({ params }: { params: { productId: string } }) {
    const product = items.find((item) => item.productId === params.productId);

    if (!product) {
        return (
            <div className="flex items-center justify-center py-40">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg text-center p-10 shadow-lg max-w-md">
                    <div className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</div>
                    <div className="text-gray-600 mb-6">Sorry, we couldnt find product with ID {params.productId} in our collection.</div>
                    <Link
                        href="/products"
                        className="bg-pink-200 hover:bg-pink-100 rounded px-4 py-2 transition-colors">
                    Back To Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* detail */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">

                        {/* image */}
                        <div className="md:w-1/2 p-8">
                        <Image 
                            src={product.imageUrl} 
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        </div>

                        {/* info */}
                        <div className="md:w-1/2 p-8">
                            <div className="text-3xl font-bold text-gray-800 mb-4">{product.name}</div>
                            <div className="text-2xl font-semibold text-pink-600 mb-6">Rp {product.price.toLocaleString('id-ID')}</div>

                            <div className="mb-6">
                                <div className="text-lg font-semibold text-gray-700 mb-2">Description</div>
                                <div className="text-gray-600">Discover the magic of {product.name} - a unique collectible blind box that brings joy and surprise to your collection.</div>
                            </div>

                            <div className="mb-8">
                                <div className="text-lg font-semibold text-gray-700 mb-2">Product Details</div>
                                <ul className="text-gray-600 space-y-1">
                                <li>• Premium quality materials</li>
                                <li>• Limited edition collectible</li>
                                <li>• Perfect for display</li>
                                </ul>
                            </div>

                            <Link href="/products" className="w-full bg-pink-200 hover:bg-pink-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                                Back To Product
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}