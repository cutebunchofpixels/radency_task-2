import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        state: "success",
        size: "base",
        children: "Badge text",
    },
    argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
    args: {
        state: "error",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
    },
};
