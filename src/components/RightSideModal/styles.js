import theme from "../../config/theme/theme";
export const portalModalStyles = () => ({
  modal: {
    margin: 0,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "-6px 8px 20px rgba(0, 0, 0, 0.4)",
    zIndex: 1300,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "2px",
  },
  small: {
    width: "90vw",
    maxHeight: "90vh",
    maxWidth: "496px",
  },
  middle: {
    width: "90vw",
    minHeight: "325px",
    maxHeight: "90vh",
    maxWidth: "650px",
  },
  large: {
    width: "90vw",
    height: "90vh",
    maxHeight: "770px",
    maxWidth: "1024px",
    overflowY: "auto",
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1299,
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflowX: "hidden",
    width: "100%",
  },
  modalConfirmContent: {
    margin: "auto",
  },
  modalFormContent: {
    padding: "0 70px 0",
    marginBottom: 100,
    flexGrow: 1,
    overflow: "auto",
  },

  modalFormContentScrollHidden: {
    padding: "0 70px 0",
    marginBottom: 100,
    flexGrow: 1,
    overflow: 0,
  },
  iconButton: {
    position: "absolute",
    zIndex: "500",
    top: 0,
    right: "3px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  confirmModal: {
    margin: 0,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "-6px 8px 20px rgba(0, 0, 0, 0.4)",
    zIndex: 1300,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "2px",
    minHeight: 292,
    padding: "0 60px",
    textAlign: "center",
    width: 496,
  },

  rightModal: {
    margin: 0,
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    boxShadow: "-6px 8px 20px rgba(0, 0, 0, 0.4)",
    zIndex: 1300,
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "2px",
  },
  right: {
    width: "90vw",
    minHeight: "100%",
    maxHeight: "90vh",
    maxWidth: "400px",
    position: "absolute",
    top: "0%",
    right: "0%",
    zIndex: 1391,
    background: "#ffffff",
  },
  rightXL: {
    width: "90vw",
    height: "100vh",
    minHeight: "100%",
    maxHeight: "791px",
    maxWidth: "604px",
  },
  modalRightFormContent: {
    padding: "0 32px 0",
    flexGrow: 1,
    overflow: "auto",
    background: "#ffffe4",
    height: "95vh",
  },
  confirmRightModal: {
    margin: 0,
    top: 0,
    right: 0,
    bottom: 0,

    boxShadow: "-6px 8px 20px rgba(0, 0, 0, 0.4)",
    zIndex: 1300,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "2px",
    minHeight: 292,
    padding: "0 60px",
    textAlign: "center",
    width: 496,
  },
  rightWrapper: {
    padding: "30px 30px",
    overflow: "hidden",
    flexShrink: 0,

    "& div > div:first-child": {
      margin: "0",
      width: 38,
    },
  },

  leftModal: {
    margin: 0,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    boxShadow: "-6px 8px 20px rgba(0, 0, 0, 0.4)",
    zIndex: 1300,
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "2px",
  },
  left: {
    width: "90vw",
    minHeight: "100%",
    maxHeight: "90vh",
    maxWidth: "600px",
  },
  modalLeftFormContent: {
    padding: "0 30px 0",
    flexGrow: 1,
    overflow: "auto",
  },
  confirmLeftModal: {
    margin: 0,
    top: 0,
    right: 0,
    bottom: 0,
    boxShadow: "-6px 8px 20px rgba(0, 0, 0, 0.4)",
    zIndex: 1300,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "2px",
    minHeight: 292,
    padding: "0 60px",
    textAlign: "center",
    width: 496,
  },
  leftWrapper: {
    padding: "30px 30px",
    overflow: "hidden",
    flexShrink: 0,
  },
  rightModalTitle: {
    padding: "10px 12px",
    display: "flex",
    alignItems: "center",
    background: theme.palette.primary.main,
  },
  modalHeaderIcon: {
    color: theme.palette.primary.inverse,
  },
  modalHeaderTitle: {
    paddingLeft: 10,
    fontSize: "1.6rem",
    color: theme.palette.primary.inverse,
  },
});
