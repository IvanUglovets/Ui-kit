import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@/ui-kit";

const meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      defaultValue: "value",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "M",
    children: "text",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "M",
    children: "text",
  },
};

export const PrimaryS: Story = {
  args: {
    variant: "primary",
    size: "S",
    children: "text",
  },
};

export const PriimaryM: Story = {
  args: {
    variant: "primary",
    size: "M",
    children: "text",
  },
};

export const PriimaryL: Story = {
  args: {
    variant: "primary",
    size: "L",
    children: "text",
  },
};

export const PriimaryXL: Story = {
  args: {
    variant: "primary",
    size: "XL",
    children: "text",
  },
};

export const PriimaryNormal: Story = {
  args: {
    variant: "primary",
    weight: "normal",
    children: "text",
  },
};

export const PriimaryMedium: Story = {
  args: {
    variant: "primary",
    weight: "medium",
    children: "text",
  },
};

export const PriimaryBold: Story = {
  args: {
    variant: "primary",
    weight: "bold",
    children: "text",
  },
};

export const PriimaryExtraBold: Story = {
  args: {
    variant: "primary",
    weight: "extrabol",
    children: "text",
  },
};
