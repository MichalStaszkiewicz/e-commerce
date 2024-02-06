import type { ThemeConfig } from "antd";
import "antd";
const customTheme: ThemeConfig = {
  components: {
    Button: {
      borderRadius: 10,

      colorPrimary: "#7670D4",
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
