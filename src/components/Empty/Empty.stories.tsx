import type { Meta, StoryObj } from "@storybook/react";
import Empty from "./Empty";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple empty component that displays a customizable message.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      description: "The message to display in the component",
      control: "text",
    },
    className: {
      description: "Additional CSS class name",
      control: "text",
    },
    style: {
      description: "Custom inline styles",
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {},
};

// Custom message
export const CustomMessage: Story = {
  args: {
    message: "This is a custom message!",
  },
  parameters: {
    docs: {
      description: {
        story: "Empty component with a custom message.",
      },
    },
  },
};
