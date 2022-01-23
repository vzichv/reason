import styles from './application-section.module.sass';
import { Link } from 'react-router-dom';

function ApplicationSection(): JSX.Element {
  return(
    <section className={styles.body}> 

      {/* Background */}
      <div className={styles.shadowTransition}>
        <img className={styles.background} src='./porsche-background-image.jpg' alt='error' />
      </div>

      {/* Advertising */}
      <div className={styles.advertising}>
        <img src='./vk-icon.svg' width='26' height='26' alt='VK'/>
        <span>Группа в vk</span>
      </div>

      {/* Application */}
      <form className={styles.application}>
        <h1>Подай заявку на<br />бесплатную консультацию<br /><mark>прямо сейчас!</mark></h1>
        <input type='text' name='name' className={styles.field} placeholder='Имя' autoComplete='off' spellCheck='false' />
        <input type='tel' name='tel' className={styles.field} placeholder='Телефон' autoComplete='off' spellCheck='false' />
        <span className={styles.consentToDataProcessing}>Нажимая кнопку отправить вы принимаете 
          <Link to='/' className={styles.link}> политику конфиденциальности</Link> и 
          <Link to='/' className={styles.link}> пользовательское соглашение</Link>
        </span>
        <input type='submit' value='ОТПРАВИТЬ' className={styles.submitBtn}/>
      </form>

    </section>
  );
}

export default ApplicationSection;