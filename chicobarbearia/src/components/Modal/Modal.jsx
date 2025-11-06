import './Modal.css'
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, image, title, description }) => {
    useEffect(() => {
        if (isOpen) {
        // Disable scrolling
        document.body.style.overflow = "hidden";
        } else {
        // Re-enable scrolling when modal closes
        document.body.style.overflow = "auto";
        }

        // Cleanup if modal unmounts for any reason
        return () => {
        document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    if (!isOpen) return null;
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <button
                onClick={onClose}
                className="modal-button"
                >
                &times;
                </button>
                <img src={image} alt={title} className="modal-image" />
                <h2 className="modal-title">{title}</h2>
                <p className="modal-text">{description}</p>
            </div>
        </div>
    )
}

export default Modal