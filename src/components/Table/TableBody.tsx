import { ReactNode } from "react";
import { ColumnInfo } from "./Table";

export default function TableBody<T extends { id: number }>({
    items,
    columns,
}: {
    items: T[];
    columns: ColumnInfo<T>[];
}) {
    function getRowCells(item: T): ReactNode {
        return columns.map((column) => {
            if (column.cellComponent) {
                return (
                    <td key={column.columnName}>
                        <column.cellComponent item={item} />
                    </td>
                );
            }

            if (column.renderCell) {
                return (
                    <td key={column.columnName}>{column.renderCell(item)}</td>
                );
            }

            throw new Error(
                "Received no mapping function or component to render as table body cell"
            );
        });
    }

    const bodyRows = items.map((item) => (
        <tr key={item.id}>{getRowCells(item)}</tr>
    ));

    return <tbody>{bodyRows}</tbody>;
}
