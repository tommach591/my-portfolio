import "./Modal.css";

function Modal({ children, modalOn, setModalOn }) {
  return modalOn ? <div className="Modal">{children}</div> : <div />;
}

export default Modal;

