import NoteEditForm from "../components/NoteEditForm/NoteEditForm";
import Note, { parseNoteDates } from "../models/Note";
import newId from "../utils/newId";
import { noteCreated } from "../redux/features/notes/notesSlice";
import { useAppDispatch } from "../redux/app/hooks";
import Heading from "../components/Heading";

export default function EditNoteModalContent({
    caption,
    oldNote,
    closeModal,
}: {
    caption: string;
    oldNote?: Note;
    closeModal: () => void;
}) {
    const dispatch = useAppDispatch();

    return (
        <div className="grid gap-x-4 gap-y-2 grid-cols-1 lg:grid-cols-3">
            <div>
                <Heading level="h3" element="h3">
                    {caption}
                </Heading>
            </div>
            <div className="lg:col-span-2">
                <NoteEditForm
                    oldNote={oldNote}
                    handleSubmit={(values) => {
                        const newNote: Note = {
                            creationDate: new Date().toString(),
                            dates: parseNoteDates(values.content),
                            isArchived: false,
                            id: newId(),
                            ...values,
                        };

                        dispatch(noteCreated(newNote));

                        closeModal();
                    }}
                />
            </div>
        </div>
    );
}
