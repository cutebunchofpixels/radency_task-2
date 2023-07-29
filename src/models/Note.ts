import Category from "./Category";
import * as yup from "yup";

export default interface Note {
    id: number;
    name: string;
    creationDate: string;
    category: Category;
    content: string;
    dates: string[];
    isArchived: boolean;
}

export const noteValidationSchema = yup.object({
    name: yup.string().required(),
    creationDate: yup
        .string()
        .required()
        .test(
            "not-feature-date",
            "Note creation date must not be later than the current date",
            (value) => {
                return new Date(value)! <= new Date();
            }
        ),
    category: yup.string().oneOf(Object.values(Category)).required(),
    content: yup.string().required(),
    dates: yup.array().of(yup.string()).required(),
    isArchived: yup.boolean().required(),
});

export function parseNoteDates(noteContent: string) {
    const dateRegex =
        /(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})/g;
    const dates = noteContent.match(dateRegex) || [];

    return dates;
}
