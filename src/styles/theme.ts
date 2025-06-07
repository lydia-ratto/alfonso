import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"


const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  globalCss: {
    "html, body": {
      bgColor: "{colors.hazelnut}",
      margin: 0,
      minHeight: "100vh",
      padding: 0,
    },
  },
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    textStyles: {

    },
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
    semanticTokens: {
      colors: {
        primary: { value: "{colors.strawberry}" },
        secondary: { value: "{colors.chocolate"},
        primaryBackground: { value: "{colors.hazelnut" },
        secondaryBackground: { value: "{colors.cream"}
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
