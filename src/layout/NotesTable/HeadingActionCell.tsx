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
        <div className="flex gap-x-2">
            <Button
                appearance="outline"
                size="sm"
                onClick={handleArchiveAllClick}
            >
                <Icon name="archive" />
            </Button>

            <Button
                appearance="outline"
                size="sm"
                onClick={handleRemoveAllClick}
            >
                <Icon name="x" />
            </Button>
        </div>
    );
}
