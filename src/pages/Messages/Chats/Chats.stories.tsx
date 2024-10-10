// Chats.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Chats } from './Chats';

const meta: Meta<typeof Chats> = {
  title: 'pages/Chats', 
  component: Chats,
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