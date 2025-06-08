import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      display: "contents",
      placeItems: "unset",
    },
  },
  preflight: true,
  theme: {
    tokens: {
      colors: {
        brand: {
        strawberry: { value: "#FF8675" },
        hazelnut: { value: "#F3E7D3" },
        chocolate: { value: "#988D7B" },
        cream: { value: "#FFF7EA" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);