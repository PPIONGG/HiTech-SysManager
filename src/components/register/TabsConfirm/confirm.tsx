import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import styles from './confirm.module.scss'
import Standard from "./Tabs/standard/standard";
interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Typography variant="body1">{children}</Typography>}
    </div>
  );
};

function Confirm() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        style={{
          width: "400px",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
        TabIndicatorProps={{
          style: {
            height: "0px",
          },
        }}
        sx={{
          "& .MuiTab-root": {
            fontSize: "10px",
            fontWeight: "bold",
            minHeight: '40px'
          },
        }}
      >
        <Tab
          label="STANDARD"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#f5c242"},
            color: "#ffffff",
            width: "100px",
            backgroundColor: "black",
            clipPath: "polygon(-10% 80%, 25% -10%, 700% 100%, 0 100%)",
            borderTopRightRadius : '6px',

          }}
        />
        <Tab
          label="ADD"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#f5c242",borderLeft : '1px solid #ffffff' },
            color: "#ffffff",
            width: "100px",
            backgroundColor: "black",
            clipPath: "polygon(-10% 80%, 25% -10%, 700% 100%, 0 100%)",
            borderLeft : '1px solid #ffffff',
            borderTopRightRadius : '6px',
          }}
        />
        <Tab
          label="RESET"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#f5c242",borderLeft : '1px solid #ffffff'},
            color: "#ffffff",
            width: "100px",
            backgroundColor: "black",
            clipPath: "polygon(-10% 80%, 25% -10%, 700% 100%, 0 100%)",
            borderLeft : '1px solid #ffffff',
            borderTopRightRadius : '6px',
          }}
        />
        <Tab
          label="SUSPENTION"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#f5c242",borderLeft : '1px solid #ffffff' },
            color: "#ffffff",
            width: "100px",
            backgroundColor: "black",
            clipPath: "polygon(-10% 80%, 25% -10%, 700% 100%, 0 100%)",
            borderLeft : '1px solid #ffffff',
            borderTopRightRadius : '6px',

          }}
        />
        {/* <Tab
    label={
      <div>
        <span style={{ marginRight: '5px' }}>Item 1</span>
        <span style={{ fontSize: '12px', color: 'gray' }}>Subtitle</span>
      </div>
    }
  /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={styles.contentTabPanel}>
          <Standard/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.contentTabPanel} style={{height : "calc(100vh - 152px)" }}>Content for ADD</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.contentTabPanel} style={{height : "calc(100vh - 152px)" }}>Content for RESET</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={styles.contentTabPanel} style={{height : "calc(100vh - 152px)" }}>Content for SUSPENTION</div>
      </TabPanel>
    </div>
  );
}

export default Confirm;
