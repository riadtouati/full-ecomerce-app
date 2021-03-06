import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name:'riad',
            email: 'admin@exemple.com',
            password: bcrypt.hashSync('test', 8),
            isAdmin: true,
        },
        {
            name:'toto',
            email: 'user@exemple.com',
            password: bcrypt.hashSync('test', 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirt',
            image:'/images/product-1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews:25,
            description: 'Hight quality product',
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirt',
            image: '/images/product-1.jpg',
            price: 120,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4,
            numReviews:17,
            description: 'Hight quality product',
        },
        {
            name: 'Lacost Free Shirt',
            category: 'Shirt',
            image:'/images/product-1.jpg',
            price: 300,
            countInStock: 0,
            brand: 'Lacost',
            rating: 4.8,
            numReviews:10,
            description: 'Hight quality product',
        },
        {
            name: 'Pants Slim Pant',
            category: 'Shirt',
            image:'/images/product-1.jpg',
            price: 260,
            countInStock: 50,
            brand: 'Pant',
            rating: 3.5,
            numReviews:22,
            description: 'Hight quality product',
        },
        {
            name: 'Puma Slim Pant',
            category: 'Pant',
            image:'/images/product-5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Pant',
            rating: 4.5,
            numReviews:14,
            description: 'Hight quality product',
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pant',
            image:'/images/product-6.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 5,
            numReviews:19,
            description: 'Hight quality product',
        },
    ],
};

export default data;