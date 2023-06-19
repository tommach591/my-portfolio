import "./Modal.css";

function Modal({ modalOn, setModalOn }) {
  return modalOn ? <div className="Modal"></div> : <div />;
}

export default Modal;

