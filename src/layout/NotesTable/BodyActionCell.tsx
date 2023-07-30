import Note from "../../models/Note";
import { useAppDispatch } from "../../redux/app/hooks";
import {
    noteRemoved,
    noteArchived,
} from "../../redux/features/notes/notesSlice";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function BodyActionCell({ item }: { item: Note }) {
    const dispatch = useAppDispatch();

    function handleArchiveClick(item: Note) {
        dispatch(noteArchived(item));
    }

    function handleRemoveClick(item: Note) {
        dispatch(noteRemoved(item));
    }

    return (
        <div className="d-flex column-gap-2">
            <Button
                variant="outline-primary"
                onClick={() => handleArchiveClick(item)}
            >
                <Icon name="archive" />
            </Button>
            <Button
                variant="outline-primary"
                onClick={() => handleRemoveClick(item)}
            >
                <Icon name="x" />
            </Button>
        </div>
    );
}
