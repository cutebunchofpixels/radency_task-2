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
    argTypes: {
        state: {
            table: {
                defaultValue: {
                    summary: "success",
                },
            },
        },
        size: {
            table: {
                defaultValue: {
                    summary: "base",
                },
            },
        },
    },
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
