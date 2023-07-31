import Category from "./Category";
import Note from "./Note";

export default interface NotesStatistics {
    category: Category;
    amountActive: number;
    amountArchived: number;
}

export function createNotesStatistics(category: Category, notes: Note[]) {
    const result: NotesStatistics = {
        category: category,
        amountActive: 0,
        amountArchived: 0,
    };

    for (const note of notes) {
        if (note.category === category && note.isArchived) {
            result.amountArchived++;
        } else if (note.category === category && !note.isArchived) {
            result.amountActive++;
        }
    }

    return result;
}
