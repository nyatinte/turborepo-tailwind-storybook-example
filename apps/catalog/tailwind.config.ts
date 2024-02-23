import shared from '@repo/ui/tailwind.config.ts';
import type { Config } from 'tailwindcss';

const config = {
  ...shared,
  content: [
    // Storybookで読み込む際は./apps/storybookを起点にするため
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../apps/docs/src/**/*.{ts,tsx}',
    '../../apps/web/src/**/*.{ts,tsx}',
  ],
} satisfies Config;

export default config;
