// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   transpilePackages: ["tamagui", "@tamagui/*"],
// };
//nextConfig;

import { withTamagui } from "@tamagui/next-plugin";

export default withTamagui({
  config: "./tamagui.config.ts",
  components: ["tamagui"],
})(
  /* your nextConfig */ {
    transpilePackages: ["tamagui"],
  },
);
