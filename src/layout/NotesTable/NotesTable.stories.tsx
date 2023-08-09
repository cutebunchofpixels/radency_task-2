import { PreloadedState } from "@reduxjs/toolkit";
import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "../../redux/app/store";
import { notes } from "../../redux/features/notes/notesSlice";
import { MockedStore } from "../../utils/MockedStore";
import NotesTable from "./NotesTable";

const meta = {
    title: "Layout/NotesTable",
    component: NotesTable,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof NotesTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultState: PreloadedState<RootState> = {
    notes: {
        value: notes,
    },
};

export const Default: Story = {
    decorators: [
        (Story) => (
            <MockedStore preloadedState={defaultState}>
                <Story />
            </MockedStore>
        ),
    ],
};

const emptyState: PreloadedState<RootState> = {
    notes: {
        value: [],
    },
};

export const Empty: Story = {
    decorators: [
        (Story) => (
            <MockedStore preloadedState={emptyState}>
                <Story />
            </MockedStore>
        ),
    ],
};

const archivedState: PreloadedState<RootState> = {
    notes: {
        value: notes.map((note, index) => ({
            ...note,
            isArchived: index % 2 === 0,
        })),
    },
};

export const WithArchivedNotes: Story = {
    decorators: [
        (Story) => (
            <MockedStore preloadedState={archivedState}>
                <Story />
            </MockedStore>
        ),
    ],
};
