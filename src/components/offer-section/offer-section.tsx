import styles from './offer-section.module.sass';

import SectionHeader from './../section-header/section-header';
import OfferComponent from './../offer-component/offer-component';

function OfferSection(): JSX.Element {
  return(
    <section className={styles.body}>
      <SectionHeader backgroundColor={3} text='Актуальные предложения!' />
      <div className={styles.margin}></div>
      <div className={styles.offers}>
        <OfferComponent name='РАССРОЧКА' description='Обучение при первом взносе размером 5000 ₽' button='ЗАПИСАТЬСЯ' />
        <OfferComponent name='ОНЛАЙН ТЕОРИЯ' description='Мы поможем Вам изучить всю нужную теорию не выходя из дома!' button='ЗАПИСАТЬСЯ' />
        <OfferComponent name='СКИДКА' description='Вступи в нашу группу ВК и получишь скидку!' button='ВСТУПИТЬ' />
      </div>
    </section>
  );
}

export default OfferSection;
