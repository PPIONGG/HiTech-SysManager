import React, { useEffect, useState } from "react";
import styles from "./SpreadingNoBD.module.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const customTheme = createTheme({
  palette: {
    warning: {
      main: "#f7b307",
    },
  },
});

interface BackdropProps {
  show: boolean;
  onClose: () => void;
}

const StyledDiv = styled("div")(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.warning.main,
    },
    "& fieldset": {
      borderColor: theme.palette.warning.main,
    },
  },
}));

const SpreadingNoBD: React.FC<BackdropProps> = ({ show, onClose }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue === "123456") {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [inputValue, onClose]);

  return show ? (
    <div className={styles.backdrop}>
      <div className={styles.dflex}>
        <div className={styles.SpreadingNoTextField}>
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
                value={inputValue}
                onChange={handleInputChange}
              />
            </StyledDiv>
          </ThemeProvider>
        </div>
        <div className={styles.grouptext}>
        {inputValue && inputValue !== "123456" && (
            <CancelRoundedIcon
              style={{
                color: "red",
                fontSize: "32px",
                backgroundColor: "#ffffff",
                clipPath: "circle(40% at 50% 50%)",
              }}
            />
          )}
          {inputValue === "123456" && (
            <TaskAltRoundedIcon style={{ color: "#05f234", fontSize: "32px" }} />
          )}
          <div className={styles.LeftChevron}></div>
          <div className={styles.LeftChevron}></div>
          <div className={styles.SpreadingNoText}>
            พนักงานกรอกเลขเลขใบปูในช่องที่กำหนดไว้
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default SpreadingNoBD;
