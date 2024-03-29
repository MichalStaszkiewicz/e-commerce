import type { ThemeConfig } from "antd";
import "antd";
const customTheme: ThemeConfig = {
  components: {
    Button: {
      borderRadius: 3,
      controlHeight: 45,

      paddingContentHorizontal: 30,
      colorPrimary: "#7670D4",
    },
    Slider: {
      colorPrimary: "#5D53E3",
      algorithm: true,
    },
    Menu: {
      fontSize: 20,

      colorPrimary: "#5D53E3",
    },
  },
  token: {
    colorPrimary: "#5D53E3",
  },
};

export default customTheme;
