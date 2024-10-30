import Link from "next/link";
import { Providers } from "../core/Providers";

import "./globals.css";

export const metadata = {
    title: "F8 Shop",
    description: "Bánh ngọt",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav className="bg-white border-gray-200 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <Link
                                href="/"
                                className="flex items-center space-x-3 rtl:space-x-reverse"
                            >
                                <img
                                    src="https://yt3.googleusercontent.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s900-c-k-c0x00ffffff-no-rj"
                                    className="h-8"
                                    alt="Flowbite Logo"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    F8
                                </span>
                            </Link>
                            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                                    alt="user photo"
                                />
                            </div>
                            <div
                                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                                id="navbar-user"
                            >
                                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <Link
                                            href="/"
                                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                                            aria-current="page"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <Providers>{children}</Providers>
                </main>
            </body>
        </html>
    );
}
