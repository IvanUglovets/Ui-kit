import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "@/ui-kit";

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <h1>MODAL</h1>,
  },
};
