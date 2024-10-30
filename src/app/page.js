"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

const Home = () => {
    const products = useSelector((state) => state.products.products);
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20">
                    {products.map((product, index) => {
                        return (
                            <div
                                key={index}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            >
                                <Link
                                    className="block "
                                    href={`/products/${product.id}`}
                                >
                                    <img
                                        className="rounded-t-lg w-full h-[230px] object-cover"
                                        src={product.imgUrl}
                                        alt=""
                                    />
                                </Link>
                                <div className="p-5">
                                    <Link href={`/products/${product.id}`}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {product.name}
                                        </h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-400">
                                        {product.description}
                                    </p>
                                    <p className="mb-3 text-white font-bold">
                                        Giá: {product.price}
                                    </p>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Xem chi tiết
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
