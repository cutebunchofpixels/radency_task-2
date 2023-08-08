import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
    title: "Components/Heading",
    component: Heading,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        level: "h1",
        element: "h1",
        children: "Heading text",
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllLevels: Story = {
    parameters: {
        controls: { exclude: ["level", "element"] },
    },
    render: (args) => (
        <>
            <Heading {...args} element="h1" level="h1"></Heading>
            <Heading {...args} element="h2" level="h2"></Heading>
            <Heading {...args} element="h3" level="h3"></Heading>
            <Heading {...args} element="h4" level="h4"></Heading>
            <Heading {...args} element="h5" level="h5"></Heading>
            <Heading {...args} element="h6" level="h6"></Heading>
        </>
    ),
};
