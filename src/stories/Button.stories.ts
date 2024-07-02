import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/ui-kit";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      defaultValue: "value",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "M",
    children: "button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "M",
    children: "button",
  },
};

export const ButtonS: Story = {
  args: {
    variant: "primary",
    size: "S",
    children: "button",
  },
};

export const ButtonM: Story = {
  args: {
    variant: "primary",
    size: "M",
    children: "button",
  },
};

export const ButtonL: Story = {
  args: {
    variant: "primary",
    size: "L",
    children: "button",
  },
};

export const ButtonXL: Story = {
  args: {
    variant: "primary",
    size: "XL",
    children: "button",
  },
};
