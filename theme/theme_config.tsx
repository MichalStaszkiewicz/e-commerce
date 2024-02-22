import type { ThemeConfig } from "antd";
import "antd";
const customTheme: ThemeConfig = {
  components: {
    Input: {
      borderRadius: 3,
    },
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
      fontSize: 16,

      colorPrimary: "#5D53E3",
    },
    Modal: {
      titleFontSize: 25,
      padding: 20,
    },
  },
  token: {
    colorPrimary: "#5D53E3",
  },
};

export default customTheme;
