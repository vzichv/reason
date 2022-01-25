import styles from './footer.module.sass';

import { Link } from 'react-router-dom';

function Footer(): JSX.Element {
  return(
    <footer className={styles.body}>

      <section className={styles.links}>

        <section className={styles.companyInfo}>

          <section className={styles.section}>
            <h3>СВЯЗЬ С НАМИ</h3>
            <Link className={styles.link} to='#'>Вконтакте</Link>
            <Link className={styles.link} to='#'>avrezon@gmail.com</Link>
          </section>

          <section className={styles.section}>
            <h3>НАШ АДРЕС</h3>
            <address className={styles.address}>пр. Троицкий,<br />дом 63, этаж 4, каб. 47</address>
          </section>

          <section className={styles.section}>
            <h3>ОСТАВИТЬ ОТЗЫВ</h3>
            <Link className={styles.link} to='#'>Вконтакте</Link>
          </section>

        </section>

        <section className={styles.section}>
          <h3>РАЗРАБОТЧИК</h3>
          <Link className={styles.link} to='#'>Телеграм</Link>
          <Link className={styles.link} to='#'>Вконтакте</Link>
        </section>

      </section>

      <section className={styles.copyright}>
        <span>© Автошкола «Резон», 2022</span>
        <Link className={styles.link} to='#'>Акт самообследования МТБ</Link>
      </section>
      

    </footer>
  );
}

export default Footer;
