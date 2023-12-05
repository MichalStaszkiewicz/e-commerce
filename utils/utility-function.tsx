import { Product } from "@/model/product";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  BankOutlined,
} from "@ant-design/icons";
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
export function getHrefFromPath(path: string, subpath: string) {
  let endIndex = path.indexOf(subpath);

  return path.substring(0, endIndex) + subpath;
}
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
export function formatNumberWithCommas(number: number): string {
  const parts = number.toString().split(".");
  const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : "";
  return `${wholePart}${decimalPart}`;
}
export function filterBySize(products: Product[], selectedSizes: string[]) {
  const filteredProducts = products.filter((product) =>
    product.availableSize.some((size) => selectedSizes.includes(size))
  );
  return filteredProducts;
}
