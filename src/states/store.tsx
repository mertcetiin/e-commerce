import { create } from "zustand";
import { HomeProducts, ProductHome, ProductShop, ShopProduct } from "../components/Products";

interface ProductState {
    homeProducts: ProductHome[]
    shopProducts: ProductShop[]
}

export const useStore = create<ProductState>()((set) => ({
    homeProducts: HomeProducts,
    shopProducts: ShopProduct,
}))