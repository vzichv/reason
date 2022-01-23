import styles from './section-header.module.sass';

interface Header {
  text: string;
  backgroundColor: number; // 1, 2, 3
}

function SectionHeader(props: Header): JSX.Element {
  const { text, backgroundColor } = props;

  function setColor(): string {
    return backgroundColor === 1 ? styles.a : backgroundColor === 2 ? styles.b : styles.c;
  }

  return(
    <header className={styles.body}>

      {/* Rectangles at an angle */}
      <div className={`${styles.rectangle} ${styles.first} ${setColor()}`}></div>
      <div className={`${styles.rectangle} ${setColor()}`}></div>
      <div className={`${styles.rectangle} ${setColor()}`}></div>

      {/* Main big rectangle */}
      <div className={`${styles.mainRectangle} ${setColor()}`}></div>
      <div className={`${styles.rectangleFillsExcess} ${setColor()}`}></div>

      {/* Text */}
      <h2 className={styles.headerText}>{text}</h2>
      
    </header>
  );
}

export default SectionHeader;