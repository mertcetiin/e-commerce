import { create } from "zustand";
import { HomeProducts, ProductHome, ProductShop, ShopProduct } from "../components/Products";

interface ProductState {
    homeProducts: ProductHome[]
    shopProducts: ProductShop[]
    isLikeCounter: number
    // isClicked: { [key: number]: boolean }
    handleIsClicked: (by: number) => void
}

export const useStore = create<ProductState>()((set) => ({
    homeProducts: HomeProducts,
    shopProducts: ShopProduct,
    isLikeCounter: 0,
    handleIsClicked: (by) => set((state) => ({ isLikeCounter: state.isLikeCounter + by }))
    // isClicked: {},
    // handleIsClicked: (item: ProductHome, by: number) => set((state) => {
    //     const updatedIsClicked = { ...state.isClicked };
    //     updatedIsClicked[item.id] = !updatedIsClicked[item.id];
    //     return { isLikeCounter: state.isLikeCounter + by, isClicked: updatedIsClicked };
    // }),
}));
