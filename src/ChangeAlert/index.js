import { WithStorageEvent } from "../ChangeAlert/withStorageEvent";
import { Modal } from "../App/Modal";
import { IoReload } from 'react-icons/io5';
import {MdPublishedWithChanges} from 'react-icons/md'
import "../ChangeAlert/ChangeAlert.css"

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <Modal>
        <div className="Alert-container">
          <button onClick={() => toggleShow(false)}>
            <MdPublishedWithChanges className="Alert-reload"/>
          </button>
          <p>Hay nuevos cambios en la Aplicación</p>
        </div>
      </Modal>
    );
  } else {
    return null;
  }
};

export const ChangeAlertWithStorageEvent = WithStorageEvent(ChangeAlert);
