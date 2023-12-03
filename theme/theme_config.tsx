import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: "#7c74ea",
      borderRadius: 4,
      algorithm: true,
    },
    Slider: {
      colorPrimary: "#5D53E3",
      algorithm: true,
    },
  },
  token: {
    colorPrimary: "#7c74ea",
  },
};

export default theme;
