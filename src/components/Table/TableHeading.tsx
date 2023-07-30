import { ReactNode } from "react";
import { ColumnInfo } from "./Table";
import styles from "./Table.module.css";

export default function TableHeading<T>({
    columns,
}: {
    columns: ColumnInfo<T>[];
}) {
    const headingCells = columns.map((column) => {
        let headingCellContent: ReactNode;

        if (column.headingComponent) {
            headingCellContent = <column.headingComponent />;
        } else if (column.renderHeading) {
            headingCellContent = column.renderHeading();
        } else {
            headingCellContent = column.columnName;
        }

        return (
            <th
                className={column.width ? styles[column.width] : ""}
                key={column.columnName}
            >
                {headingCellContent}
            </th>
        );
    });

    return (
        <thead>
            <tr>{headingCells}</tr>
        </thead>
    );
}
