import type { ThemeConfig } from "antd";
import "antd";
const customTheme: ThemeConfig = {
  components: {
    Button: {
      borderRadius: 4,

      colorPrimary: "#7670D4",
      colorBgBlur: "red",

      colorPrimaryBg: "red",
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

export default customTheme;
