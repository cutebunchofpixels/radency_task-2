import type { Meta, StoryObj } from "@storybook/react";
import Table, { ColumnInfo } from "./Table";
import { faker } from "@faker-js/faker";
import newId from "../../utils/newId";
import Button from "../Button/Button";

interface SampleUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

const columns: ColumnInfo<SampleUser>[] = [
    {
        columnName: "First name",
        renderCell(item) {
            return item.firstName;
        },
    },
    {
        columnName: "Last name",
        renderCell(item) {
            return item.lastName;
        },
    },
    {
        columnName: "Age",
        renderCell(item) {
            return item.age;
        },
    },
];

const items: SampleUser[] = [];
for (let i = 0; i < 5; i++) {
    items.push({
        id: newId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 20, max: 50 }),
    });
}

const meta = {
    title: "Components/Table",
    component: Table<SampleUser>,
    args: {
        items,
        columns,
        getRowId: (item) => item.id,
    },
    tags: ["autodocs"],
    argTypes: {
        items: {
            control: false,
        },
        columns: {
            control: false,
        },
        getRowId: {
            control: false,
        },
    },
} satisfies Meta<typeof Table<SampleUser>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const columnsWithCallback: ColumnInfo<SampleUser>[] = [
    ...columns,
    {
        columnName: "Full name",
        renderCell(item) {
            return `${item.firstName} ${item.lastName}`;
        },
    },
];

export const BodyCallback: Story = {
    args: {
        columns: columnsWithCallback,
    },
};

function SampleCellComponent({ item }: { item: SampleUser }) {
    return (
        <Button
            appearance="primary"
            size="base"
            onClick={() => alert(item.firstName)}
        >
            Alert name
        </Button>
    );
}

const columnsWithCustomCells: ColumnInfo<SampleUser>[] = [
    ...columns,
    {
        columnName: "Actions",
        cellComponent: SampleCellComponent,
        width: "w-32",
    },
];

export const CustomCells: Story = {
    args: {
        columns: columnsWithCustomCells,
    },
};
