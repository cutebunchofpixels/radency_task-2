import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { ReactNode, useState } from "react";
import Button from "../Button/Button";

const meta = {
    title: "Components/Modal",
    component: Modal,
    args: {
        children: "Modal text",
        isOpen: true,
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
        <>
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
        </>
    );
}

export const Open: Story = {
    parameters: {
        controls: { exclude: ["isOpen", "onModalClose"] },
    },
    render: (args) => <ModalWithHooks {...args} />,
};

export const Closed: Story = {
    parameters: {
        controls: { exclude: ["isOpen", "onModalClose"] },
    },
    args: {
        isOpen: false,
    },
    render: (args) => <ModalWithHooks {...args} />,
};
