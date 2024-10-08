// AnonymousTips.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { AnonymousTips } from './AnonymousTips';

const meta: Meta<typeof AnonymousTips> = {
  title: 'pages/AnonymousTips', 
  component: AnonymousTips,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
  args: {
   
  },
};