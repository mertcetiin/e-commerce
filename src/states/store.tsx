import { create } from "zustand";
import { HomeProducts, ProductHome, ProductShop, ShopProduct } from "../components/Products";

interface ProductState {
    homeState: ProductHome[]
    shopState: ProductShop[]
    isLikeCounter: number
    favorite: any[];
    handleLikeClick: (name: string, price: string, img: string, id: number) => void
    shopLikeClick: (name: string, price: string, img: string, id: number) => void
    setFavorite: (id: number, isFavorite: boolean) => void;
    shopFavorite: (id: number, isFavorite: boolean) => void;
    clearFavorite: (id: number) => void;
}

export const useStore = create<ProductState>()((set) => ({
    homeState: HomeProducts,
    shopState: ShopProduct,
    isLikeCounter: 0,
    favorite: [],

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

    clearFavorite: (id) =>
        set((state) => ({
            favorite: state.favorite.filter((item) => item.id !== id),
            isLikeCounter: state.isLikeCounter - 1,
        }),
        ),
}));
