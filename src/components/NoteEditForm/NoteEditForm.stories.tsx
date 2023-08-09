import type { Meta, StoryObj } from "@storybook/react";
import NoteEditForm from "./NoteEditForm";
import createFakeNote from "../../utils/createFakeNote";

const meta = {
    title: "Components/NoteEditForm",
    component: NoteEditForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        handleSubmit(values) {},
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
} satisfies Meta<typeof NoteEditForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateNote: Story = {};

const sampleNote = createFakeNote();

export const EditExisting: Story = {
    args: {
        oldNote: sampleNote,
    },
};
