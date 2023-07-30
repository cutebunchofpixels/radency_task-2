import { ReactNode } from "react";
import styles from "./Modal.module.css";

export default function Modal({
    isOpen,
    onModalClose,
    children,
}: {
    isOpen: boolean;
    onModalClose: () => void;
    children: ReactNode;
}) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalWrapper} onClick={onModalClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
