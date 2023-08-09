import Heading from "../../components/Heading/Heading";
import NoteEditForm, {
    FormValues,
} from "../../components/NoteEditForm/NoteEditForm";
import Note from "../../models/Note";

interface EditNoteMOdalContentProps {
    /**
     * Displayed as modal's header
     */
    caption: string;
    /**
     * Can be passed for editing existing notes
     */
    oldNote?: Note;
    /**
     * Fired whenever form is submitted
     */
    handleSubmit: (values: FormValues) => void;
}

export default function EditNoteModalContent({
    caption,
    oldNote,
    handleSubmit,
}: EditNoteMOdalContentProps) {
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
