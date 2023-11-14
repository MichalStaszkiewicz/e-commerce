import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ConfigProvider } from "antd";

library.add(faMagnifyingGlass);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: "#7c74ea",
          colorPrimaryBorder: "#7c74ea",
          colorPrimary: "#7c74ea",
          colorPrimaryBorderHover: "#7c74ea",
        },
      }}
    >
      {" "}
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
