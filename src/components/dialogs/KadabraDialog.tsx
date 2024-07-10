import { Dialog } from "@mui/material";
import "./Dialog.css";
import Close from "../../assets/components-icons/close.svg";

interface KadabraDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  titleIcon?: any;
  deleteIcon?: any;
  children: JSX.Element;
}
const KadabraDialog = (props: KadabraDialogProps) => {
  const {
    open,
    handleClose,
    title,
    titleIcon,
    deleteIcon = Close,
    children,
  } = props;

  const dialogStyle = {
    "& .MuiDialog-paper": {
      display: "flex",
      width: "582px",
      padding: "12px 24px 24px 24px",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
      borderRadius: "var(--Numeric-values-radius-3, 8px)",
      background: "var(--Base-colours-Light, #FFF)",
      boxShadow: "0px 5px 21px 0px rgba(137, 157, 225, 0.15)",
    },
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="alert-dialog"
      sx={dialogStyle}
    >
      <div className="top-main-dialog-container">
        <div className="main-dialog-title-container">
          {titleIcon && <img className="img-dialog-title" src={titleIcon} />}
          <label className="main-dialog-title">{title}</label>
        </div>
        {deleteIcon && (
          <img
            className="pointer"
            src={deleteIcon}
            alt="icon"
            onClick={handleClose}
          />
        )}
      </div>
      {children}
    </Dialog>
  );
};
export default KadabraDialog;
