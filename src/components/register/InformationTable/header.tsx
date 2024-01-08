import styles from "./styles.module.scss";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import SpreadingNoBD from "./SpreadingNoBD";
import { useState } from "react";


const customTheme = createTheme({
  palette: {
    warning: {
      main: "#f7b307",
    },
  },
});
const StyledDiv = styled("div")(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.warning.main,
    },
    "& fieldset": {
      borderColor: theme.palette.warning.main, // สีเริ่มต้นที่จะเปลี่ยน
    },
  },
}));

export default function HeaderInformationTable() {
  const [showBackdrop, setShowBackdrop] = useState(true);

  const closeBackdrop = () => {
    setShowBackdrop(false);
  };
  return (
    <div className={styles.headerContainer}>
              <SpreadingNoBD show={showBackdrop} onClose={closeBackdrop} />

      <div className={styles.spreadingNo}>
        <div className={styles.textSpreadingNo}>SPREADING No</div>
        <div className={styles.dflex}>
          <ThemeProvider theme={customTheme}>
            <StyledDiv>
              <TextField
                label=""
                variant="outlined"
                color="warning"
                style={{
                  backgroundColor: "#f5c242",
                  borderRadius: "20px",
                }}
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    width: "200px",
                    height: "30px",
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
              />
            </StyledDiv>
          </ThemeProvider>
          <div>
            {/* <CancelRoundedIcon style={{ color: "red", fontSize: "32px" }} /> */}
          </div>
        </div>
      </div>
      <div className={styles.boxRFID}>
        <div className={styles.textBoxRfid}>BOX RFID</div>
        <div className={styles.dflex}>
          <ThemeProvider theme={customTheme}>
            <StyledDiv>
              <TextField
                label=""
                variant="outlined"
                color="warning"
                style={{
                  backgroundColor: "#f5c242",
                  borderRadius: "20px",
                }}
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    width: "250px",
                    height: "30px",
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
              />
            </StyledDiv>
          </ThemeProvider>
          {/* <TaskAltRoundedIcon style={{ color: "green", fontSize: "32px" }} /> */}
          {/* <CancelRoundedIcon style={{ color: 'red',fontSize:"32px"}}/> */}
        </div>
      </div>
    </div>
  );
}
