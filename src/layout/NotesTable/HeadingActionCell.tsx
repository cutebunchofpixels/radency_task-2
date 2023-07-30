import { useAppDispatch } from "../../redux/app/hooks";
import {
    notesArchived,
    notesRemoved,
} from "../../redux/features/notes/notesSlice";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function HeadingActionCell() {
    const dispatch = useAppDispatch();

    function handleArchiveAllClick() {
        dispatch(notesArchived());
    }

    function handleRemoveAllClick() {
        dispatch(notesRemoved());
    }

    return (
        <div className="d-flex column-gap-2">
            <Button variant="outline-primary" onClick={handleArchiveAllClick}>
                <Icon name="archive" />
            </Button>

            <Button variant="outline-primary" onClick={handleRemoveAllClick}>
                <Icon name="x" />
            </Button>
        </div>
    );
}
