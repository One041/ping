import styles from "./modal.module.css"
import FocusLock from "react-focus-lock";

interface ModalProps {
    onClose: () => void;
}

export const Modal = ({onClose}: ModalProps) => {
    return (
        <div className={styles.overlay}>
            <dialog open className={styles.modal}>
                <FocusLock autoFocus={false}>
                    <div className={styles.modalContent}>
                        <h4>
                            Title
                        </h4>
                        <div>
                            <button>Button A</button>
                        </div>
                        <div>
                            <button>Button B</button>
                        </div>
                        <div>
                            <button>Button C</button>
                        </div>
                        <div>
                            <button onClick={onClose}>Close modal</button>
                        </div>
                    </div>
                </FocusLock>
            </dialog>
        </div>
    )
}