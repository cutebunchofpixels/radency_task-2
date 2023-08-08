import Heading from "../components/Heading";
import NoteEditForm, {
    FormValues,
} from "../components/NoteEditForm/NoteEditForm";
import Note from "../models/Note";

export default function EditNoteModalContent({
    caption,
    oldNote,
    handleSubmit,
}: {
    caption: string;
    oldNote?: Note;
    handleSubmit: (values: FormValues) => void;
}) {
    return (
        <div className="grid gap-x-4 gap-y-2 grid-cols-1 lg:grid-cols-3">
            <div>
                <Heading level="h3" element="h3">
                    {caption}
                </Heading>
            </div>
            <div className="lg:col-span-2">
                <NoteEditForm oldNote={oldNote} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}
