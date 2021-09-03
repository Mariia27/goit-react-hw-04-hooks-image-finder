import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./styles.css";

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", exitModal);
    return () => window.removeEventListener("keydown", exitModal);
  }, []);

  const exitModal = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const modalRoot = document.querySelector("#modal-root");

  return createPortal(
    <div className="Overlay">
      <div className="Modal">{this.props.children}</div>
    </div>,
    modalRoot
  );
}

Modal.prototype = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
