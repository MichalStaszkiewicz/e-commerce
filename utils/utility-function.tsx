import { Product } from "@/model/product";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  BankOutlined,
} from "@ant-design/icons";
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
  const filteredProducts = products.filter((product) =>
    product.availableSize.some((size) => selectedSizes.includes(size))
  );
  return filteredProducts;
}
