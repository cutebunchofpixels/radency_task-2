import Category from "./Category";

export default interface Note {
    id: number;
    name: string;
    creationDate: string;
    category: Category;
    content: string;
    dates: string[];
    isArchived: boolean;
}

export function parseNoteDates(noteContent: string) {
    const dateRegex =
        /(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})/g;
    const dates = noteContent.match(dateRegex) || [];

    return dates;
}
