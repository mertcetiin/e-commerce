import { create } from "zustand";
import { HomeProducts, ProductHome } from "../components/Products";

interface ProductState {
    homeProducts: ProductHome[]
}

export const useStore = create<ProductState>()((set) => ({
    homeProducts: HomeProducts,
}))