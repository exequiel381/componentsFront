import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const ModalComponent = (props) => {
  const handleClose = () => props.setOpen(false);
  return (
    <Modal
      keepMounted
      open={props.open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <div className="modal_header">
          <span>{props.header ? props.header : ""}</span>
          <CloseIcon
            onClick={handleClose}
            style={{ cursor: "pointer", color: "black" }}
          />
        </div>
        {props.children}
        {props.type == "deleteConfirmation" ? <></> : null}
        {props.type == "confirmation" ? <></> : null}
        {props.type == "message" ? <></> : null}
        {props.type == "loading" ? <></> : null}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
