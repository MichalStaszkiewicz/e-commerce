import { FilterBy } from "@/components/shop-content/shop-right-column/const";
import { Product } from "@/model/product";

export type ShopState = {
  loading: boolean;
  error: boolean;
  originalProducts: Product[];
  selectedSizes: string[];
  selectedCategory: FilterBy;
  products: Product[];
  paginationPage: number;
  productsPerPage: number;
  minPrice: number;
  maxPrice: number;
};
export type TShopContext = {
  shopState: ShopState;

  setState: React.Dispatch<React.SetStateAction<ShopState>>;
  setRouterPath: Function;
};
