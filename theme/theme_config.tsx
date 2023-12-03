import type { ThemeConfig } from "antd";
import "antd";
const theme: ThemeConfig = {
  components: {
    Button: {
      borderRadius: 4,

      colorPrimary: "#5D53E3",
      algorithm: true,
    },
    Slider: {
      colorPrimary: "#5D53E3",
      algorithm: true,
    },
  },
  token: {
    colorPrimary: "#5D53E3",
  },
};

export default theme;
