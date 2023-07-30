import NotesTable from "../layout/NotesTable/NotesTable";
import NewNoteForm from "../layout/NewNoteForm";

export default function Home() {
    return (
        <>
            <NewNoteForm />
            <NotesTable />
        </>
    );
}
