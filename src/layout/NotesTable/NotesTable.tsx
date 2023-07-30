import Note from "../../models/Note";
import Table, { ColumnInfo } from "../../components/Table/Table";
import { useAppSelector } from "../../redux/app/hooks";
import BodyActionCell from "./BodyActionCell";
import HeadingActionCell from "./HeadingActionCell";

export default function NotesTable() {
    const notes = useAppSelector((state) => state.notes.value);

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
        <div className="container-md">
            <Table<Note> items={notes} columns={columns} />
        </div>
    );
}
