import { ReactNode } from "react";

interface ModalProps {
    /**
     * Determines if the modal is currently visible or not
     */
    isOpen: boolean;
    /**
     * Fired every time whenever modal closes
     */
    onModalClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onModalClose, children }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/10 transition p-10"
            onClick={onModalClose}
        >
            <div
                className="bg-white p-12 rounded"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
