import { useState } from "react";

export const WithStorageEvent = (WrappedComponent) => {
  return function ChangeAlertWithStorageEvent(props) {
    const [storageStatus, setStorageStatus] = useState(false);
    window.addEventListener('storage',(changes)=>{
        if(changes.key==='todos_v1'){
            setStorageStatus(true)
        }
    })
    const toggleShow=()=>{
        props.syncronize();
        setStorageStatus(false)
    }
    return (
      <WrappedComponent show={storageStatus} toggleShow={toggleShow} />
    );
  };
};
