import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { ReactNode, useState } from "react";
import Button from "../Button/Button";

const meta = {
    title: "Components/Modal",
    component: Modal,
    tags: ["autodocs"],
    args: {
        children: "Modal text",
        isOpen: true,
    },
    argTypes: {
        isOpen: {
            control: false,
        },
        onModalClose: {
            control: false,
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

function ModalWithHooks({
    children,
    isOpen,
}: {
    children: ReactNode;
    isOpen: boolean;
}) {
    const [isModalOpen, setModalOpen] = useState<boolean>(isOpen);

    return (
        <div style={{ minHeight: "30vh" }}>
            <Modal
                isOpen={isModalOpen}
                onModalClose={() => setModalOpen(false)}
            >
                {children}
            </Modal>
            <Button
                appearance="primary"
                size="base"
                onClick={() => setModalOpen(true)}
            >
                Open modal
            </Button>
        </div>
    );
}

export const Open: Story = {
    render: (args) => <ModalWithHooks {...args} />,
};

export const Closed: Story = {
    args: {
        isOpen: false,
    },
    render: (args) => <ModalWithHooks {...args} />,
};
