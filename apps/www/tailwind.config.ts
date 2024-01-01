import type { Config } from "tailwindcss";

import baseConfig from "@kafeasist/tailwind";

export default {
  content: [
    ...baseConfig.content,
    "../../packages/@kafeasist:ui/src/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
} satisfies Config;
