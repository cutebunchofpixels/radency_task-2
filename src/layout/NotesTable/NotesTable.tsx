import Note from "../../models/Note";
import Table, { ColumnInfo } from "../../components/Table/Table";
import { useAppSelector } from "../../redux/app/hooks";
import BodyActionCell from "./BodyActionCell";
import HeadingActionCell from "./HeadingActionCell";
import { useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Modal from "../../components/Modal/Modal";
import EditNoteModalContent from "../EditNoteModalContent";

export default function NotesTable() {
    const notes = useAppSelector((state) => state.notes.value);
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
                    closeModal={() => setCreatingNewNote(false)}
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
