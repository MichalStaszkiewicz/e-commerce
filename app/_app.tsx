import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ConfigProvider } from "antd";
import customTheme from "@/theme/theme_config";

library.add(faMagnifyingGlass);

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <ConfigProvider theme={customTheme}>
      {" "}
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
