import shared from "@repo/ui/tailwind.config.ts";
import type { Config } from "tailwindcss";

const config = {
  ...shared,
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
