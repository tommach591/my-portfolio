import "./Modal.css";
import { useEffect, useRef } from "react";

function Modal({ modalOn, setModalOn, item }) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClick(event) {
      if (modalOn && !modalRef.current?.contains(event.target)) {
        setModalOn(false);
      }
    }

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [modalOn, setModalOn]);

  return modalOn && Object.entries(item).length > 0 ? (
    <div className="Modal">
      <div className="ModalBody" ref={modalRef}>
        <img
          className="ModalClose"
          src="https://api.iconify.design/material-symbols:cancel.svg?color=%23b4b4b4"
          alt="X"
          onClick={() => setModalOn(false)}
        />
        <div className="ModalThumbnail">
          <img src={item.img} alt="" />
        </div>
        <div className="ModalText">
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
          <h2>{item.details}</h2>
          <h2>Skills: {item.skills}</h2>
        </div>
        <div className="ProjectLinks">
          {item.demo ? (
            <div
              className="ProjectLink"
              onClick={() => {
                window.open(item.demo, "_blank");
              }}
            >
              Demo
            </div>
          ) : (
            <div />
          )}
          {item.github ? (
            <div
              className="ProjectLink"
              onClick={() => {
                window.open(item.github, "_blank");
              }}
            >
              Github
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Modal;

