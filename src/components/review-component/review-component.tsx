import styles from './review-component.module.sass';

interface Review {
  author: string;
  review: string;
}

function ReviewComponent(props: Review): JSX.Element {
  const { author, review } = props;

  return(
    <section className={styles.body}>
      <header className={styles.header}>
        <img src='./profile-image.svg' alt='error' />
        <h1>{author}</h1>
      </header>
      <div className={styles.reviewText}>
        <span>{review}</span>
      </div>
    </section>
  );
}

export default ReviewComponent;