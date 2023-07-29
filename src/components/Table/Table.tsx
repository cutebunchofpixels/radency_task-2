import { ReactNode } from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

export interface ColumnInfo<T> {
    columnName: string;
    width?: string;

    renderCell?: (item: T) => ReactNode;
    renderHeading?: () => ReactNode;

    cellComponent?: React.FC<{ item: T }>;
    headingComponent?: React.FC;
}

export default function Table<T extends { id: number }>({
    items,
    columns,
}: {
    items: T[];
    columns: ColumnInfo<T>[];
}) {
    return (
        <table className="table table-hover table-bordered">
            <TableHeading<T> columns={columns} />
            <TableBody<T> items={items} columns={columns} />
        </table>
    );
}
