import styles from './header.module.sass';

function Header(): JSX.Element {
  return(
    <header className={styles.body}>

      <div className={`${styles.company} ${styles.left}`}>
        <h1 className={styles.name}>РЕЗОН</h1>
        <span className={styles.type}>АВТОШКОЛА</span>  
      </div>

      <div className={`${styles.company} ${styles.right}`}>
        <h1 className={styles.telephone}>+7 (999) 999-99-99</h1> 
        <span className={styles.workingHours}>На связи с 10:00 до 20:00</span>
        <address className={styles.address}>пр. Троицкий, дом 63, этаж 4, каб. 47</address>
      </div>
      
    </header>
  );
}

export default Header;