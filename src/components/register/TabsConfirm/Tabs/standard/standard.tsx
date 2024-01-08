import styles from "./standard.module.scss";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const IncrementButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(161, 206, 98)",
  width: "190px",
  color: "black",
  fontWeight: "bold",
  clipPath: "polygon(90% 0, 100% 40%, 100% 100%, 0 100%, 0 0)",
  "&:hover": {
    backgroundColor: "rgb(129, 169, 65)",
  },
}));

const DecrementButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(230, 51, 35)",
  width: "190px",
  color: "black",
  fontWeight: "bold",
  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 40%)",
  "&:hover": {
    backgroundColor: "rgb(199, 41, 25)",
  },
}));

const customTheme = createTheme({
  palette: {
    warning: {
      main: "#f5c242",
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

export default function Standard() {
  return (
    <>

    </>
    // <div className={styles.container}>
    //   <div>
    //     <div>
    //       <div className={styles.imgSize}>
    //         <div className={styles.img}>
    //           <img
    //             width={70}
    //             src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyWfvY2rfy4gGRRzoah5rz2PJcr3UA421_ANIDMJEvGHKENbGAVGwKJQxXBtMQpZgFslJR0Y7CXwONP6qXDVk_xLk4WpqGeWrOR376_HQMyo3tSNV1CgQWtg223tuzLxROjKkTdhxR&usqp=CAc"
    //             alt=""
    //           />
    //         </div>
    //         <div className={styles.groupsize}>
    //           <div className={styles.size}>M</div>
    //           <div className={styles.marker}>กระเป๋าซ้าย X1</div>
    //         </div>
    //       </div>
    //       {/* <div className={styles.groupcount}>
    //         <Stack direction="row" spacing={0.6}>
    //           <IncrementButton variant="contained">เพิ่ม (+)</IncrementButton>
    //           <DecrementButton variant="contained">ลด (-)</DecrementButton>
    //         </Stack>
    //       </div> */}
    //     </div>

    //     <div className={styles.groupBundleRFID}>
    //       <div className={styles.textBundleRFID}>Bundle RFID</div>
    //       <ThemeProvider theme={customTheme}>
    //         <StyledDiv>
    //           <TextField
    //             label=""
    //             variant="outlined"
    //             color="warning"
    //             style={{
    //               backgroundColor: "#f5c242",
    //               borderRadius: "4px",
    //             }}
    //             InputProps={{
    //               style: {
    //                 width: "170px",
    //                 height: "35px",
    //                 color: "white",
    //                 fontWeight: "bold",
    //               },
    //             }}
    //           />
    //         </StyledDiv>
    //       </ThemeProvider>
    //     </div>
    //   </div>
    //   <div className={styles.cardconfrim}>
    //     <div className={styles.textconfirm}>CONFIRM</div>
    //     <CancelRoundedIcon
    //       style={{
    //         color: "red",
    //         fontSize: "32px",
    //         backgroundColor: "white",
    //         borderRadius: "100px",
    //       }}
    //     />
    //   </div>
    // </div>
  );
}
