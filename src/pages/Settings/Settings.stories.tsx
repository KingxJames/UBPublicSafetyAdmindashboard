// Settings.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Settings } from './Settings';

const meta: Meta<typeof Settings> = {
  title: 'pages/Settings', 
  component: Settings,
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