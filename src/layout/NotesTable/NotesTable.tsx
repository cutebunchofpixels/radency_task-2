import { useState } from "react";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Modal from "../../components/Modal/Modal";
import { FormValues } from "../../components/NoteEditForm/NoteEditForm";
import Table, { ColumnInfo } from "../../components/Table/Table";
import Note, { parseNoteDates } from "../../models/Note";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { noteCreated } from "../../redux/features/notes/notesSlice";
import newId from "../../utils/newId";
import EditNoteModalContent from "../EditNoteModalContent/EditNoteModalContent";
import BodyActionCell from "./BodyActionCell";
import HeadingActionCell from "./HeadingActionCell";

export default function NotesTable() {
    const notes = useAppSelector((state) => state.notes.value);
    const dispatch = useAppDispatch();
    const [isViewingArchived, setViewingArchived] = useState<boolean>(false);
    const [isCreatingNewNote, setCreatingNewNote] = useState<boolean>(false);

    let visibleNotes: Note[];

    if (isViewingArchived) {
        visibleNotes = notes.filter((note) => note.isArchived);
    } else {
        visibleNotes = notes.filter((note) => !note.isArchived);
    }

    function handleToggleArchivedClick() {
        setViewingArchived(!isViewingArchived);
    }

    function handleSubmitForm(values: FormValues) {
        const newNote: Note = {
            creationDate: new Date().toString(),
            dates: parseNoteDates(values.content),
            isArchived: false,
            id: newId(),
            ...values,
        };

        dispatch(noteCreated(newNote));
        setCreatingNewNote(false);
    }

    const columns: ColumnInfo<Note>[] = [
        {
            columnName: "Name",
            renderCell(note) {
                return note.name;
            },
            width: "w-1/6",
        },
        {
            columnName: "Created",
            renderCell(note) {
                return new Date(note.creationDate).toLocaleDateString();
            },
        },
        {
            columnName: "Category",
            renderCell(note) {
                return note.category;
            },
        },
        {
            columnName: "Content",
            renderCell(note) {
                return note.content;
            },
            width: "w-1/3",
        },
        {
            columnName: "Dates",
            renderCell(note) {
                return note.dates.join(", ");
            },
            width: "w-1/6",
        },
        {
            columnName: "actions",
            headingComponent: HeadingActionCell,
            cellComponent: BodyActionCell,
        },
    ];

    return (
        <div className="container mx-auto px-5 lg:px-10 mt-10">
            <Modal
                isOpen={isCreatingNewNote}
                onModalClose={() => setCreatingNewNote(false)}
            >
                <EditNoteModalContent
                    caption="New note"
                    handleSubmit={handleSubmitForm}
                />
            </Modal>
            <div className="flex gap-x-4 items-start">
                <Heading level="h2" element="h2">
                    {isViewingArchived ? "Archived" : "Active"} notes
                </Heading>
                <Button onClick={handleToggleArchivedClick}>
                    See {isViewingArchived ? "active" : "archived"}
                </Button>
                <Button onClick={() => setCreatingNewNote(true)}>
                    Create note
                </Button>
            </div>
            <Table<Note>
                items={visibleNotes}
                columns={columns}
                getRowId={(item) => item.id}
            />
        </div>
    );
}
