import styles from "./standard.module.scss";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

const IncrementButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(161, 206, 98)',
  width : "185px",
  '&:hover': {
    backgroundColor: 'rgb(129, 169, 65)',
  },
  // marginRight: theme.spacing(1),
}));

const DecrementButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(230, 51, 35)',
  width : "185px",
  '&:hover': {
    backgroundColor: 'rgb(199, 41, 25)',
  },
}));


export default function Standard() {

  return (
    <div className={styles.container}>
      <div className={styles.scrollbar}>
        <div>
          <div className={styles.imgSize}>
            <div className={styles.img}>
              <img
                width={70}
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyWfvY2rfy4gGRRzoah5rz2PJcr3UA421_ANIDMJEvGHKENbGAVGwKJQxXBtMQpZgFslJR0Y7CXwONP6qXDVk_xLk4WpqGeWrOR376_HQMyo3tSNV1CgQWtg223tuzLxROjKkTdhxR&usqp=CAc"
                alt=""
              />
            </div>
            <div className={styles.groupsize}>
              <div className={styles.size}>M</div>
              <div className={styles.marker}>ชิ้นหน้าซ้าย X1</div>
            </div>
          </div>
          <div className={styles.groupcount}>
          <Stack direction="row" spacing={2}>
      <IncrementButton variant="contained">เพิ่ม (+)</IncrementButton>
      <DecrementButton variant="contained">ลด (-)</DecrementButton>
    </Stack>
          </div>
          <div className={styles.bundleRFID}>Bundle RFID </div>
        </div>
      </div>
      <div className={styles.cardconfrim}>
        <div className={styles.textconfirm}>CONFIRM</div>
        <CancelRoundedIcon
          style={{
            color: "red",
            fontSize: "32px",
            backgroundColor: "white",
            borderRadius: "100px",
          }}
        />
      </div>
    </div>
  );
}
