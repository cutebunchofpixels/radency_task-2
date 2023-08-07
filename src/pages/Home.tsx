import NotesTable from "../layout/NotesTable/NotesTable";
import NotesStatsTable from "../layout/NotesStatsTable/NotesStatsTable";

export default function Home() {
    return (
        <>
            <NotesTable />
            <NotesStatsTable />
        </>
    );
}
