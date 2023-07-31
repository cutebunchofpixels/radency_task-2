import { ReactNode } from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import { Key } from "react";

export interface ColumnInfo<T> {
    columnName: string;
    width?: string;

    renderCell?: (item: T) => ReactNode;
    renderHeading?: () => ReactNode;

    cellComponent?: React.FC<{ item: T }>;
    headingComponent?: React.FC;
}

export default function Table<T>({
    items,
    columns,
    getRowId,
}: {
    items: T[];
    columns: ColumnInfo<T>[];
    getRowId: (item: T) => Key;
}) {
    return (
        <table className="table table-hover table-bordered">
            <TableHeading<T> columns={columns} />
            <TableBody<T> items={items} columns={columns} getRowId={getRowId} />
        </table>
    );
}
