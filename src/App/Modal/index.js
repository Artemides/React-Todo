import ReactDOM from "react-dom";
import "./Modal.css"
export const Modal=({children})=>{
    return ReactDOM.createPortal(
        <div className="ModalBackGround">
            {children}
        </div>,
        document.getElementById('modal')
    );

}