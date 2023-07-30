import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Note from "../../../models/Note";
import { parseNoteDates } from "../../../models/Note";
import Category from "../../../models/Category";

interface NotesState {
    value: Note[];
}

let initialId = 1;
const notes: Note[] = [
    {
        id: initialId++,
        name: "Vitae proin sagittis nisl rhoncus mattis rhoncus",
        creationDate: "2023-07-20",
        category: Category.Task,
        content:
            "Quisque porta enim ultricies orci tempus maximus nec a enim. Donec eget convallis mi. Etiam.",
        isArchived: false,
        dates: parseNoteDates(
            "Quisque porta enim ultricies orci tempus maximus nec a enim. Donec eget convallis mi. Etiam."
        ),
    },
    {
        id: initialId++,
        name: "Orci eu lobortis elementum nibh tellus molestie",
        creationDate: "2023-07-18",
        category: Category.Idea,
        content:
            "Vestibulum leo est 5/5/2023, aliquet eu augue et, imperdiet viverra enim. Mauris vitae aliquet massa. Duis.",
        isArchived: false,
        dates: parseNoteDates(
            "Vestibulum leo est 5/5/2023, aliquet eu augue et, imperdiet viverra enim. Mauris vitae aliquet massa. Duis."
        ),
    },
    {
        id: initialId++,
        name: "Interdum consectetur libero id faucibus",
        creationDate: "2023-07-16",
        category: Category.RandomThought,
        content: "Morbi ut risus vitae libero auctor luctus.",
        isArchived: false,
        dates: parseNoteDates("Morbi ut risus vitae libero auctor luctus."),
    },
    {
        id: initialId++,
        name: "Volutpat consequat mauris",
        creationDate: "2023-06-05",
        category: Category.Task,
        content:
            "Quam id leo in 17/05/2023 vitae turpis massa sed 03/05/2023 elementum tempus.",
        isArchived: false,
        dates: parseNoteDates(
            "Quam id leo in 17/05/2023 vitae turpis massa sed 03/05/2023 elementum tempus."
        ),
    },
    {
        id: initialId++,
        name: "Rhoncus aenean vel elits",
        creationDate: "2023-06-01",
        category: Category.Task,
        content:
            "Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium.",
        isArchived: false,
        dates: parseNoteDates(
            "Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium."
        ),
    },
    {
        id: initialId++,
        name: "Eget nunc",
        creationDate: "2023-06-01",
        category: Category.Task,
        content:
            "Quam pellentesque nec 29/05/2023 nam aliquam sem et tortor consequat id.",
        isArchived: false,
        dates: parseNoteDates(
            "Quam pellentesque nec 29/05/2023 nam aliquam sem et tortor consequat id."
        ),
    },
    {
        id: initialId++,
        name: "Viverra ipsum nunc aliquet bibendum",
        creationDate: "2023-05-19",
        category: Category.RandomThought,
        content:
            "Orci eu lobortis elementum nibh tellus molestie nunc non blandit.",
        isArchived: false,
        dates: parseNoteDates(
            "Orci eu lobortis elementum nibh tellus molestie nunc non blandit."
        ),
    },
];

const initialState: NotesState = {
    value: notes,
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        noteCreated(state, action: PayloadAction<Note>) {
            state.value.unshift(action.payload);
        },

        noteEdited(state, action: PayloadAction<Note>) {
            const newNote = action.payload;

            const oldNote = state.value.find(
                (note) => note.id === action.payload.id
            )!;

            oldNote.name = newNote.name;
            oldNote.category = newNote.category;
            oldNote.content = newNote.content;
            oldNote.dates = newNote.dates;
        },

        noteRemoved(state, action: PayloadAction<Note>) {
            const deleteNote = action.payload;
            const deleteNoteIndex = state.value.findIndex(
                (note) => note.id === deleteNote.id
            );

            state.value.splice(deleteNoteIndex, 1);
        },

        noteArchived(state, action: PayloadAction<Note>) {
            const archiveNote = action.payload;

            state.value = state.value.map((note) => {
                if (note.id === archiveNote.id) {
                    note.isArchived = !note.isArchived;
                }

                return note;
            });
        },

        notesArchived(state) {
            for (const note of state.value) {
                note.isArchived = true;
            }
        },
        notesRemoved() {
            return { value: [] };
        },
    },
});

export const {
    noteCreated,
    noteEdited,
    noteRemoved,
    noteArchived,
    notesArchived,
    notesRemoved,
} = notesSlice.actions;
export default notesSlice.reducer;
