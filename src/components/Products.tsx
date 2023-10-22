import Shirt from '../assets/images/shirt.avif';
import tshirtBlack from '../assets/images/tshirtBlack.avif';
import tshirtBrown from '../assets/images/tshirtBrown.avif';
import jacket from '../assets/images/jacket.avif';
import whiteSweatshirt from '../assets/images/whiteSweatshirt.avif';
import blackSweatshirt from '../assets/images/blackSweatshirt.avif';

import graySweatshirt from '../assets/images/graySweatshirt.avif';
import greenSweater from '../assets/images/greenSweater.avif';
import pinkSweatshirt from '../assets/images/pinkSweatshirt.avif';
import whiteSweater from '../assets/images/whiteSweater.avif';
import blackJacket from '../assets/images/blackJacket.avif';
import blueJacket from '../assets/images/blueJacket.avif';

export type ProductHome = {
    id: number;
    img: string;
    price: number;
    name: string;
    info: string;
    isFavorite: boolean;
}

export const HomeProducts: ProductHome[] = ([
    {
        id: 1,
        img: Shirt,
        price: 10,
        name: 'Shirt',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        isFavorite: false,
    },
    {
        id: 2,
        img: tshirtBlack,
        price: 12,
        name: 'Shirt',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        isFavorite: false,
    },
    {
        id: 3,
        img: tshirtBrown,
        price: 14,
        name: 'Shirt',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        isFavorite: false,
    },
    {
        id: 4,
        img: jacket,
        price: 22,
        name: 'Shirt',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        isFavorite: false,
    },
    {
        id: 5,
        img: whiteSweatshirt,
        price: 18,
        name: 'Shirt',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        isFavorite: false,
    },
    {
        id: 6,
        img: blackSweatshirt,
        price: 26,
        name: 'Shirt',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        isFavorite: false,
    },
])


export type ProductShop = {
    id: number;
    img: string;
    price: number;
    name: string;
    isFavorite: boolean;
    isBasket: boolean;
}

export const ShopProduct: ProductShop[] = ([
    {
        id: 1,
        img: Shirt,
        price: 15,
        name: 'Shirt',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 2,
        img: tshirtBlack,
        price: 12,
        name: 'Tshirt',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 3,
        img: tshirtBrown,
        price: 14,
        name: 'Tshirt',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 4,
        img: jacket,
        price: 22,
        name: 'Jacket',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 5,
        img: whiteSweatshirt,
        price: 18,
        name: 'Sweatshirt',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 6,
        img: blackSweatshirt,
        price: 26,
        name: 'Sweatshirt',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 7,
        img: greenSweater,
        price: 28,
        name: 'Sweater',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 8,
        img: pinkSweatshirt,
        price: 18,
        name: 'Sweatshirt',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 9,
        img: whiteSweater,
        price: 20,
        name: 'Sweater',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 10,
        img: graySweatshirt,
        price: 28,
        name: 'Sweatshirt',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 11,
        img: blackJacket,
        price: 42,
        name: 'Jacket',
        isFavorite: false,
        isBasket: false,
    },
    {
        id: 12,
        img: blueJacket,
        price: 38,
        name: 'Jacket',
        isFavorite: false,
        isBasket: false,
    },
])