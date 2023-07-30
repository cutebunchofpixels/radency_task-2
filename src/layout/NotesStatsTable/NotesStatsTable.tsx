import NotesStatistics, {
    createNotesStatistics,
} from "../../models/NotesStatistics";
import { useAppSelector } from "../../redux/app/hooks";
import Category from "../../models/Category";
import Table from "../../components/Table/Table";
import { ColumnInfo } from "../../components/Table/Table";

export default function NotesStatsTable() {
    const notes = useAppSelector((state) => state.notes.value);

    const notesStatistics = Object.values(Category).map((category) =>
        createNotesStatistics(category, notes)
    );

    const columns: ColumnInfo<NotesStatistics>[] = [
        {
            columnName: "Category",
            renderCell(item) {
                return item.category;
            },
        },
        {
            columnName: "Active",
            renderCell(item) {
                return item.amountActive;
            },
        },
        {
            columnName: "Archived",
            renderCell(item) {
                return item.amountArchived;
            },
        },
    ];

    return (
        <div className="container-md mt-5">
            <Table<NotesStatistics>
                items={notesStatistics}
                columns={columns}
                getRowId={(item) => item.category}
            />
        </div>
    );
}
