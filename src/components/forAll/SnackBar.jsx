import * as React from "react";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

export default function PositionedSnackbar({
  alertMessage,
  snackBarState,
  setSnackBarState,
}) {
  const { vertical, horizontal, open } = snackBarState;

  // const handleClick = (newState) => () => {
  //   setSnackBarState({ ...newState, open: true });
  // };

  const handleClose = () => {
    setSnackBarState((prev) => ({ ...prev, open: false }));
  };

  // const buttons = (
  //   <React.Fragment>
  //     <Box sx={{ display: "flex", justifyContent: "center" }}>
  //       <Button
  //         onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
  //         style={{ backgroundColor: "white" }}
  //       >
  //         Bottom-Center
  //       </Button>
  //     </Box>
  //   </React.Fragment>
  // );

  return (
    <Box sx={{ width: 500 }}>
      {/* {buttons} */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={alertMessage && alertMessage.successMessage}
        key={vertical + horizontal}
      />
    </Box>
  );
}
