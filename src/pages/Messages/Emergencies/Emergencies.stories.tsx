// Emergencies.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Emergencies } from './Emergencies';

const meta: Meta<typeof Emergencies> = {
  title: 'pages/Emergencies', 
  component: Emergencies,
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