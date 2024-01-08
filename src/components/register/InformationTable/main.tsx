import Datagrid from "./datagrid";
import styles from "./styles.module.scss";
export default function MainInformationTable() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.information}>
        <div className={styles.textInformation}>Information</div>
        <div className={styles.contentInformation}>
          <div>
            <div className={styles.textbold}>Cutting Table</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Customer Name</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Customer PO</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>JOB</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Sub - JOB</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Line Item</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Color Item</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Part Assembly</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Layer</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Ratio</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Style</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Color Style</div>
            <div>-{}</div>
          </div>
          <div>
            <div className={styles.textbold}>Shipment</div>
            <div>-{}</div>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        {/* <Datagrid /> */}
        Datagrid
      </div>
    </div>
  );
}
