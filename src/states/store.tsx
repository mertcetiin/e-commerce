import { create } from "zustand";
import { HomeProducts, ProductHome, ProductShop, ShopProduct } from "../components/Products";

interface ProductState {
    homeState: ProductHome[]
    shopState: ProductShop[]
    isLikeCounter: number
    isBasketCounter: number
    favorite: any[];
    basket: any[];
    handleLikeClick: (name: string, price: number, img: string, id: number) => void
    shopLikeClick: (name: string, price: number, img: string, id: number) => void
    setFavorite: (id: number, isFavorite: boolean) => void;
    shopFavorite: (id: number, isFavorite: boolean) => void;
    handleBasketClick: (name: string, price: number, img: string, id: number) => void
    shopBasket: (id: number, isFavorite: boolean) => void;
    clearFavorite: (id: number) => void;

    isPriceCounter: number;
    totalPrice: (price: number) => void;
}

export const useStore = create<ProductState>()((set) => ({
    homeState: HomeProducts,
    shopState: ShopProduct,
    isLikeCounter: 0,
    isBasketCounter: 0,
    favorite: [],
    basket: [],
    isPriceCounter: 0,


    totalPrice: (price) => {
        set((state) => ({
            ...state,
            isPriceCounter: state.isPriceCounter + price,
        }));
    },



    handleLikeClick: (name, price, img, id) =>
        set((state) => {
            const updatedHomeState = state.homeState.map((item) => {
                if (item.id === id) {
                    const isFavorite = !item.isFavorite;
                    return { ...item, isFavorite };
                }
                return item;
            });

            const selectedProduct = updatedHomeState.find((item) => item.id === id);

            if (selectedProduct && selectedProduct.isFavorite) {
                return {
                    isLikeCounter: state.isLikeCounter + 1,
                    favorite: [...state.favorite, { name, price, img, id }],
                    homeState: updatedHomeState,
                };
            } else {
                const updatedFavorite = state.favorite.filter((item) => item.id !== id);
                return {
                    isLikeCounter: state.isLikeCounter - 1,
                    favorite: updatedFavorite,
                    homeState: updatedHomeState,
                };
            }
        }),

    shopLikeClick: (name, price, img, id) =>
        set((state) => {
            const updatedShopState = state.shopState.map((item) => {
                if (item.id === id) {
                    const isFavorite = !item.isFavorite;
                    return { ...item, isFavorite };
                }
                return item;
            });

            const selectedProduct = updatedShopState.find((item) => item.id === id);

            if (selectedProduct && selectedProduct.isFavorite) {
                return {
                    isLikeCounter: state.isLikeCounter + 1,
                    favorite: [...state.favorite, { name, price, img, id }],
                    shopState: updatedShopState,
                };
            } else {
                const updatedFavorite = state.favorite.filter((item) => item.id !== id);
                return {
                    isLikeCounter: state.isLikeCounter - 1,
                    favorite: updatedFavorite,
                    shopState: updatedShopState,
                };
            }
        }),

    handleBasketClick: (name, price, img, id) =>
        set((state) => {
            const updatedBasketState = state.shopState.map((item) => {
                if (item.id === id) {
                    const isBasket = !item.isBasket;
                    return { ...item, isBasket }
                }
                return item;
            });
            const selectedShopProduct = updatedBasketState.find((item) => item.id === id);

            if (selectedShopProduct && selectedShopProduct.isBasket) {
                return {
                    isBasketCounter: state.isBasketCounter + 1,
                    basket: [...state.basket, { name, price, id, img }],
                    shopState: updatedBasketState,
                };
            } else {
                const updatedBasket = state.basket.filter((item) => item.id !== id);
                return {
                    isBasketCounter: state.isBasketCounter - 1,
                    basket: updatedBasket,
                    shopState: updatedBasketState,
                }
            }
        }),

    setFavorite: (id, isFavorite) =>
        set((state) => {
            const updatedHomeState = state.homeState.map((item) => {
                if (item.id === id) {
                    return { ...item, isFavorite };
                }
                return item;
            });
            return {
                homeState: updatedHomeState,
            };
        }),

    shopFavorite: (id, isFavorite) =>
        set((state) => {
            const updatedShopState = state.shopState.map((item) => {
                if (item.id === id) {
                    return { ...item, isFavorite };
                }
                return item;
            });
            return {
                shopState: updatedShopState,
            }
        }),

    shopBasket: (id, isBasket) =>
        set((state) => {
            const updatedShopBasketState = state.shopState.map((item) => {
                if (item.id === id) {
                    return { ...item, isBasket };
                }
                return item;
            });
            return {
                shopState: updatedShopBasketState,
            }
        }),

    clearFavorite: (id) =>
        set((state) => ({
            favorite: state.favorite.filter((item) => item.id !== id),
            isLikeCounter: state.isLikeCounter - 1,
        }),
        ),


}));
