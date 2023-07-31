import NotesTable from "../layout/NotesTable/NotesTable";
import NewNoteForm from "../layout/NewNoteForm";
import NotesStatsTable from "../layout/NotesStatsTable/NotesStatsTable";

export default function Home() {
    return (
        <>
            <NewNoteForm />
            <NotesTable />
            <NotesStatsTable />
        </>
    );
}
