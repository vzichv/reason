import styles from './subsection-header.module.sass';

interface Header {
  text: string;
  backgroundColor: number; // 1, 2, 3
}

function SubsectionHeader(props: Header): JSX.Element {
  const { text, backgroundColor } = props;

  function setBackgroundColor(): string {
    return backgroundColor === 1 ? styles.a : backgroundColor === 2 ? styles.b : styles.c;
  }

  function setTextColor(): string {
    return backgroundColor === 1 ? styles.ta : backgroundColor === 2 ? styles.tb : styles.tc;
  }

  return(
    <div className={styles.body}>
      <div className={styles.formForPrinting}></div>
      <div className={`${styles.distinctiveStripe} ${setBackgroundColor()}`}></div>
      <h3 className={`${styles.headerText} ${setTextColor()}`}>{text}</h3>
    </div>
  );
}

export default SubsectionHeader;