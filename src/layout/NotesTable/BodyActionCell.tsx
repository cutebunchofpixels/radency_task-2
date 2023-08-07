import Note, { parseNoteDates } from "../../models/Note";
import { useAppDispatch } from "../../redux/app/hooks";
import {
    noteRemoved,
    noteArchived,
    noteEdited,
} from "../../redux/features/notes/notesSlice";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Modal from "../../components/Modal/Modal";
import NoteEditForm from "../../components/NoteEditForm";
import { useState } from "react";

export default function BodyActionCell({ item }: { item: Note }) {
    const [isEdtitng, setEditing] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    function handleArchiveClick(item: Note) {
        dispatch(noteArchived(item));
    }

    function handleRemoveClick(item: Note) {
        dispatch(noteRemoved(item));
    }

    function handleEditClick() {
        setEditing(true);
    }

    return (
        <div className="d-flex column-gap-2">
            <Modal isOpen={isEdtitng} onModalClose={() => setEditing(false)}>
                <>
                    <div className="text-center">
                        <h3>Edit note</h3>
                    </div>
                    <NoteEditForm
                        oldNote={item}
                        handleSubmit={(values) => {
                            const newNote: Note = {
                                ...item,
                                ...values,
                                dates: parseNoteDates(values.content),
                            };
                            dispatch(noteEdited(newNote));
                            setEditing(false);
                        }}
                    />
                </>
            </Modal>
            <Button appearance="outline" size="sm" onClick={handleEditClick}>
                <Icon name="pencil" />
            </Button>
            <Button
                appearance="outline"
                size="sm"
                onClick={() => handleArchiveClick(item)}
            >
                <Icon name="archive" />
            </Button>
            <Button
                appearance="outline"
                size="sm"
                onClick={() => handleRemoveClick(item)}
            >
                <Icon name="x" />
            </Button>
        </div>
    );
}
