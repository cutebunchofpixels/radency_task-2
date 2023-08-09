import { PreloadedState } from "@reduxjs/toolkit";
import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "../../redux/app/store";
import { notes } from "../../redux/features/notes/notesSlice";
import { MockedStore } from "../../utils/MockedStore";
import NotesStatsTable from "./NotesStatsTable";

const meta = {
    title: "Layout/NotesStatsTable",
    component: NotesStatsTable,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof NotesStatsTable>;

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
