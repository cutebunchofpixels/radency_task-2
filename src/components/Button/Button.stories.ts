import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        appearance: "primary",
        size: "base",
        children: "Button text",
    },
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Outline: Story = {
    args: {
        appearance: "outline",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
    },
};
