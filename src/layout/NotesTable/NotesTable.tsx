import Note from "../../models/Note";
import Table, { ColumnInfo } from "../../components/Table/Table";
import { useAppSelector } from "../../redux/app/hooks";
import BodyActionCell from "./BodyActionCell";
import HeadingActionCell from "./HeadingActionCell";
import { useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

export default function NotesTable() {
    const notes = useAppSelector((state) => state.notes.value);
    const [isViewingArchived, setViewingArchived] = useState<boolean>(false);

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
            width: "w15",
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
            width: "w35",
        },
        {
            columnName: "Dates",
            renderCell(note) {
                return note.dates.join(", ");
            },
            width: "w15",
        },
        {
            columnName: "actions",
            headingComponent: HeadingActionCell,
            cellComponent: BodyActionCell,
        },
    ];

    return (
        <div className="container-md mt-5">
            <div className="d-flex column-gap-3 mb-3">
                <Heading level="h2" element="h2">
                    {isViewingArchived ? "Archived" : "Active"} notes
                </Heading>
                <Button onClick={handleToggleArchivedClick}>
                    See {isViewingArchived ? "active" : "archived"}
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
