import Shirt from '../assets/images/shirt.avif';

type Product = {
    id: number;
    img: string;
    price: string;
    info: string;
}

export let HomeProducts: Product[] = ([
    {
        id: 1,
        img: Shirt,
        price: '$10',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 2,
        img: Shirt,
        price: '$10',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 3,
        img: Shirt,
        price: '$10',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 4,
        img: Shirt,
        price: '$10',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 5,
        img: Shirt,
        price: '$10',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 6,
        img: Shirt,
        price: '$10',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
])