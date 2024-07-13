import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Button from "../button/Button.js";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],

  argTypes: {
    // Define argTypes with type safety and control options
    variant: {
      control: "select",
      options: ["primary", "secondary", "default"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    // rounded: {
    //   control: "select",
    //   options: ["default", "sm", "lg", "xl", "xxl", "none", "full"],
    // },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: <Button label="Click Me" />,
  },
};

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
