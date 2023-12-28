import Datagrid from './datagrid';
import styles from './styles.module.scss'
export default function MainInformationTable() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.information}>
        <div className={styles.textInformation}>Information</div>
        <div className={styles.contentInformation}>
        <div>
          <div className={styles.textbold}>Cutting Table</div>
          <div>- Table 1</div>
        </div>
        <div>
          <div className={styles.textbold}>Customer Name</div>
          <div>- NI : NIKE World Co.,Ltd</div>
        </div>
        <div>
          <div className={styles.textbold}>Customer PO</div>
          <div>- 4508996104</div>
        </div>
        <div>
          <div className={styles.textbold}>JOB</div>
          <div>- NI2217705</div>
        </div>
        <div>
          <div className={styles.textbold}>Sub - JOB</div>
          <div>- NI2217705-A</div>
        </div>
        <div>
          <div className={styles.textbold}>Line Item</div>
          <div>- 30</div>
        </div>
        <div>
          <div className={styles.textbold}>Color Item</div>
          <div>- 0AH DKSKGY</div>
        </div>
        <div>
          <div className={styles.textbold}>Part Assembly</div>
          <div>- Front</div>
          <div>- Black</div>
          <div>- Hand Left</div>
          <div>- Hand Right</div>
        </div>
        <div>
          <div className={styles.textbold}>Layer</div>
          <div>- 72</div>
        </div>
        <div>
          <div className={styles.textbold}>Ratio</div>
          <div>S = 1/72</div>
          <div>M = 3/216</div>
          <div>L = 3/216</div>
          <div>XL = 3/216</div>
          <div>2XL = 1/72</div>
        </div>
        <div>
          <div className={styles.textbold}>Style</div>
          <div>- BV9452</div>
        </div>
        <div>
          <div className={styles.textbold}>Color Style</div>
          <div>- 070</div>
        </div>
        <div>
          <div className={styles.textbold}>Shipment</div>
          <div>- 10/9/2023</div>
        </div>
        </div>
      </div>
      <div className={styles.table}>
        <Datagrid/>
      </div>
    </div>
  );
}
