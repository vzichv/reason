import styles from './offer-component.module.sass';

interface Offer {
  name: string;
  description: string;
  button: string;
}

function OfferComponent(props: Offer): JSX.Element {
  const { name, description, button } = props;

  return(
    <section className={styles.offer}>
      
      <header className={styles.header}>
        <h1>{name}</h1>
      </header>
      <div className={styles.body}>
        <span>{description}</span>
        <input className={styles.button} type='submit' value={button} />
      </div>

    </section>
  );
}

export default OfferComponent;
