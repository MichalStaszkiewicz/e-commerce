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
