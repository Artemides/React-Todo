
import { WithStorageEvent } from "../ChangeAlert/withStorageEvent";
const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>¿Hubo Cambios?</p>
        <button onClick={() => toggleShow(false)}>Reload Page</button>
      </div>
    );
  } else {
    return null;
  }
};

export const ChangeAlertWithStorageEvent = WithStorageEvent(ChangeAlert);
