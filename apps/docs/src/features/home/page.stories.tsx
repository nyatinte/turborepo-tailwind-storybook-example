import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './page';

const meta = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
