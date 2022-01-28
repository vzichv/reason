import styles from './application-section.module.sass';
import { Link } from 'react-router-dom';

const backgrounds = {
  pc: './porsche-background-image.jpg',
  tablet: './porsche-background-image-tablets.jpg',
  telephone: './porsche-background-image-telephones.jpg'
}

function ApplicationSection(): JSX.Element {

  function getBackground(): string {
    if (window.innerWidth > 1300) {
      return backgrounds.pc;
    }
    else if (window.innerWidth > 720 && window.innerWidth <= 1300) {
      return backgrounds.tablet;
    }
    else if (window.innerWidth <= 720) {
      return backgrounds.telephone;
    }
    else {
      return '';
    }
  }

  return(
    <section className={styles.body}> 

      {/* Transition */}
      <div className={styles.shadowTransition}>

        {/* Advertising */}
        <div className={styles.advertising}>
          <img src='./vk-icon.svg' width='26' height='26' alt='VK'/>
          <span>Группа в vk</span>
        </div>

        {/* Application */}
        <form className={styles.application}>
          <h1>Подай заявку на<br />бесплатную консультацию<br /><mark>прямо сейчас!</mark></h1>

          <div className={styles.fields}>
            <input type='text' name='name' className={styles.field} placeholder='Имя' autoComplete='off' spellCheck='false' />
            <input type='tel' name='tel' className={styles.field} placeholder='Телефон' autoComplete='off' spellCheck='false' />
          </div>

          <span className={styles.consentToDataProcessing}>Нажимая кнопку отправить вы принимаете 
            <Link to='/' className={styles.link}> политику конфиденциальности</Link> и 
            <Link to='/' className={styles.link}> пользовательское соглашение</Link>
          </span>
          
          <input type='submit' value='ОТПРАВИТЬ' className={styles.submitBtn}/>
        </form>

      </div>
      
    </section>
  );
}

export default ApplicationSection;