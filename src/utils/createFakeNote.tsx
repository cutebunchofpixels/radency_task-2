import { faker } from "@faker-js/faker";
import Note, { parseNoteDates } from "../models/Note";
import Category from "../models/Category";
import newId from "./newId";

export default function createFakeNote(): Note {
    const noteContent = faker.word.words({ count: { min: 5, max: 15 } });

    const fakeNote: Note = {
        id: newId(),
        name: faker.word.words({ count: { min: 3, max: 10 } }),
        category: faker.helpers.arrayElement(Object.values(Category)),
        content: noteContent,
        creationDate: new Date().toString(),
        isArchived: faker.datatype.boolean(),
        dates: parseNoteDates(noteContent),
    };

    return fakeNote;
}
