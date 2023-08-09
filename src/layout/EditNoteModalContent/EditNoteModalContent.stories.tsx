import type { Meta, StoryObj } from "@storybook/react";
import EditNoteModalContent from "./EditNoteModalContent";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import createFakeNote from "../../utils/createFakeNote";

const meta = {
    title: "Layout/EditNoteModalContent",
    component: EditNoteModalContent,
    tags: ["autodocs"],
    render(args) {
        return <EditNoteModalWithHooks {...args} />;
    },
    argTypes: {
        oldNote: {
            control: false,
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
    },
} satisfies Meta<typeof EditNoteModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

function EditNoteModalWithHooks(
    props: Omit<
        React.ComponentProps<typeof EditNoteModalContent>,
        "handleSubmit"
    >
) {
    const [isModalOpen, setModalOpen] = useState<boolean>(true);

    return (
        <div style={{ minHeight: "65vh" }}>
            <Modal
                isOpen={isModalOpen}
                onModalClose={() => setModalOpen(false)}
            >
                <EditNoteModalContent
                    handleSubmit={(values) => {
                        setModalOpen(false);
                    }}
                    {...props}
                />
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

export const CreateNewNote: Story = {
    args: {
        caption: "Create new note",
    },
};

const sampleNote = createFakeNote();

export const EditNote: Story = {
    args: {
        caption: "Edit note",
        oldNote: sampleNote,
    },
};
