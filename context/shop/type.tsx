import { Product } from "@/model/product";

export type ShopState = {
  loading: boolean;
  error: boolean;
  originalProducts: Product[];
  selectedSizes: string[];
  selectedCategories: string[];
  products: Product[];
  paginationPage: number;
  productsPerPage: number;
};
export type TShopContext = {
  shopState: ShopState;

  setState: React.Dispatch<React.SetStateAction<ShopState>>;
};
