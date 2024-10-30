import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: "Product 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 100000,
            imgUrl: "https://daylambanh.edu.vn/wp-content/uploads/2019/06/banh-ngot-muffin.jpg",
        },
        {
            id: 2,
            name: "Product 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 200000,
            imgUrl: "https://anhquanbakery.com/uploads/images/Chesse-Cake-2.jpeg",
        },
        {
            id: 3,
            name: "Product 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 300000,
            imgUrl: "https://vcdn1-dulich.vnecdn.net/2016/08/23/banhngon2-1471922491.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=JLN0JUIPBwClQeiatvJWQQ",
        },
    ],
};

const productSlice = createSlice({
    name: "products",
    initialState,
});

export default productSlice;
