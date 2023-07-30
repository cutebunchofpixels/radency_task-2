import { ColumnInfo } from "./Table";
import styles from "./Table.module.css";

export default function TableHeading<T>({
    columns,
}: {
    columns: ColumnInfo<T>[];
}) {
    const headingCells = columns.map((column) => {
        if (column.headingComponent) {
            return (
                <th
                    key={column.columnName}
                    className={column.width ? styles[column.width] : ""}
                >
                    <column.headingComponent />
                </th>
            );
        }

        if (column.renderHeading) {
            return (
                <th
                    key={column.columnName}
                    className={column.width ? styles[column.width] : ""}
                >
                    {column.renderHeading()}
                </th>
            );
        }

        return (
            <th
                className={column.width ? styles[column.width] : ""}
                key={column.columnName}
            >
                {column.columnName}
            </th>
        );
    });

    return (
        <thead>
            <tr>{headingCells}</tr>
        </thead>
    );
}
