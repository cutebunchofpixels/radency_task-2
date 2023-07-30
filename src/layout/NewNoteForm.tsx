import NoteEditForm from "../components/NoteEditForm";
import Note, { parseNoteDates } from "../models/Note";
import newId from "../utils/newId";
import { noteCreated } from "../redux/features/notes/notesSlice";
import { useAppDispatch } from "../redux/app/hooks";

export default function NewNoteForm() {
    const dispatch = useAppDispatch();

    return (
        <div className="container-md mt-5">
            <h2>New note</h2>
            <NoteEditForm
                handleSubmit={(values) => {
                    const newNote: Note = {
                        creationDate: new Date().toString(),
                        dates: parseNoteDates(values.content),
                        isArchived: false,
                        id: newId(),
                        ...values,
                    };

                    dispatch(noteCreated(newNote));
                }}
            />
        </div>
    );
}
