import { useState } from "react";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Modal from "../../components/Modal/Modal";
import Note from "../../models/Note";
import { useAppDispatch } from "../../redux/app/hooks";
import {
    noteArchived,
    noteRemoved,
} from "../../redux/features/notes/notesSlice";
import EditNoteModalContent from "../EditNoteModalContent";

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
        <div className="flex flex-col sm:flex-row gap-2">
            <Modal isOpen={isEdtitng} onModalClose={() => setEditing(false)}>
                <EditNoteModalContent
                    oldNote={item}
                    caption="Edit note"
                    closeModal={() => setEditing(false)}
                />
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
