"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProductDetail = () => {
    const products = useSelector((state) => state.products.products);
    const { id } = useParams();
    const product = products.find((product) => product.id === +id);
    console.log(product);

    useEffect(() => {
        document.title = `${product.name}`;
    }, []);

    return (
        <div className="container mx-auto">
            <div className="pt-20 grid grid-cols-2 gap-x-8">
                <div className="">
                    <img
                        className="w-full"
                        src={product.imgUrl}
                        alt={product.name}
                    />
                </div>
                <div className="flex flex-col gap-y-5">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className="text-red-500 text-2xl font-bold">
                        {product.price}VNĐ
                    </p>
                    <p className="text-gray-500">{product.description}</p>
                    <div className="flex gap-x-2">
                        <Link href="/">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Home
                            </button>
                        </Link>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
