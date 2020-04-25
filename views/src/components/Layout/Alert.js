import { useContext } from "react";
import { Toast } from "react-bootstrap";

import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <Toast
        className={`bg-${alert.type} fixed-top`}
        // style={{ position: "absolute", zIndex: "1" }}
        animation
      >
        <Toast.Header>
          <strong className="mr-auto">Info</strong>
        </Toast.Header>
        <Toast.Body>{alert.msg}</Toast.Body>
      </Toast>
    )
  );
};

export default Alert;
