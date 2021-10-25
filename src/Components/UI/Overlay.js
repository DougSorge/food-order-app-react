import React from "react";
import ReactDOM from "react-dom";
import style from "./Overlay.module.css";

function RenderOverlay(props) {
  return <div className={style.overlay} onClick={props.toggleCart} />;
}

const ModalContent = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

export default function Overlay(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <RenderOverlay toggleCart={props.toggleCart} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
