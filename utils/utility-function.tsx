import {
  FilterBy,
  SortBy,
} from "@/components/shop-content/shop-right-column/const";
import { useShop } from "@/hooks/use-shop";
import { Product } from "@/model/product";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  BankOutlined,
} from "@ant-design/icons";

export function sortProducts(sortBy: SortBy, products: Product[]) {
  if (sortBy === SortBy.nameAToZ) {
    products.sort((a, b) => a.name.toLowerCase().localeCompare(b.name));
  } else if (sortBy === SortBy.nameZToA) {
    products.sort((a, b) => b.name.toLowerCase().localeCompare(a.name));
  } else if (sortBy === SortBy.priceAsc) {
    products.sort((a, b) => b.price - a.price);
  } else if (sortBy === SortBy.priceDesc) {
    products.sort((a, b) => a.price - b.price);
  }

  return products;
}
export function filterByFromCategory(category: string): FilterBy {
  if (category.toLowerCase() == "men") {
    return FilterBy.men;
  } else if (category.toLowerCase() == "women") {
    return FilterBy.women;
  } else if (category.toLowerCase() == "children") {
    return FilterBy.children;
  }
  return FilterBy.none;
}
export function filterByCategory(
  filterBy: FilterBy,
  products: Product[]
): Product[] {
  let tempProducts = products;
  if (filterBy === FilterBy.men) {
    tempProducts = products.filter((product) =>
      product.categories.includes("men")
    );
  } else if (filterBy === FilterBy.women) {
    tempProducts = products.filter((product) =>
      product.categories.includes("women")
    );
  } else if (filterBy === FilterBy.children) {
    tempProducts = products.filter((product) =>
      product.categories.includes("children")
    );
  }
  return tempProducts;
}
/**
 * Capitalizes the first letter of a string.
 *
 * @param text The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Gets the href from a path and subpath.
 *
 * @param path The path to extract the href from.
 * @param subpath The subpath to search for.
 * @returns The href.
 */



export function getHrefFromPath(path: string, subpath: string) {
  let endIndex = path.indexOf(subpath);

  return path.substring(0, endIndex) + subpath;
}

/**
 * Gets the icon based on a string.
 *
 * @param text The string to get the icon for.
 * @returns The icon or null.
 */
export function iconFromString(text: string) {
  if (text.toLowerCase() == "cart") {
    return <ShoppingOutlined />;
  } else if (text.toLowerCase() == "shop") {
    return <ShoppingCartOutlined />;
  } else if (text.toLowerCase() == "checkout") {
    return <BankOutlined />;
  } else {
    return null;
  }
}

/**
 * Formats a number with commas.
 *
 * @param number The number to format.
 * @returns The formatted number with commas.
 */
export function formatNumberWithCommas(number: number): string {
  const parts = number.toString().split(".");
  const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : "";
  return `${wholePart}${decimalPart}`;
}

/**
 * Filters products by size.
 *
 * @param products The array of products to filter.
 * @param selectedSizes The array of selected sizes.
 * @returns The filtered array of products.
 */
export function filterBySize(products: Product[], selectedSizes: string[]) {
  let filteredProducts = products;

  if (selectedSizes.length > 0) {
    filteredProducts = products.filter((product) =>
      product.availableSize.some((size) => selectedSizes.includes(size))
    );
  }

  return filteredProducts;
}

export function filterByPrice(
  products: Product[],
  minPrice: number,
  maxPrice: number
): Product[] {
  products = products.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );
  return products;
}
export function readSizesFromString(sizes: string): string[] {
  let selectedSizes: string[] = [];

  let size = "";
  for (let i = 0; i < sizes.length; i++) {
    let letter = sizes.charAt(i);

    if (letter != ",") {
      size += letter;
    }
    if (letter == ",") {
      selectedSizes.push(size);
      size = "";
    }
  }
  selectedSizes.push(size);
  return selectedSizes;
}
