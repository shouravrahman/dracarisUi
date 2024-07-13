import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.js";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    // Define argTypes with type safety and control options
    buttonType: {
      control: "select",
      options: ["primary", "secondary", "warning", "outline", "error"],
    },
    size: {
      control: "select",
      options: ["default", "small", "large", "xxl"],
    },
    rounded: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "xxl", "none", "full"],
    },
    spacing: {
      control: "select",
      options: ["default", "small", "large", "xxl"],
    },
    label: { control: "text" },
    leftIcon: { control: { type: "boolean" } },
    rightIcon: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};
