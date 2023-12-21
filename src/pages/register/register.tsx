import HeaderInformationTable from "../../components/register/InformationTable/header";
import MainInformationTable from "../../components/register/InformationTable/main";
import Confirm from "../../components/register/TabsConfirm/confirm";
import styles from "./register.module.scss";

export default function Register() {
  return (
    <div className={styles.container}>
      <div>
        <HeaderInformationTable />
        <MainInformationTable />
      </div>
      <div>
        <Confirm />
      </div>
    </div>
  );
}
