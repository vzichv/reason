import styles from './edit-reviews.module.sass';

import { useEffect, useState } from 'react';
import axios from 'axios';

import ReviewService from './../../../services/review-service';

import { Review } from './../../../models/review';

function EditReviews(): JSX.Element {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [deletedReviews, setDeletedReviews] = useState<string[]>([]);
  
  // This state help rerender page
  const [render, RerenderPage] = useState<boolean>(false);

  useEffect(() => {
    axios.get('http://localhost:4000/api/reviews')
    .then( response => {
      if (response.statusText !== 'OK') {
        return Promise.reject(new Error(`Response failed: ${response.status} (${response.statusText})`));
      }
      return response;
    })
    .then( response => setReviews(response.data))
    .catch( error => console.log(error));
  }, []);

  function saveData() {
    axios.post('http://localhost:4000/api/reviews', {
      reviews, 
      deletedReviews: deletedReviews
    })
    .then(function(response) {
      console.log(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  const displayReviews = (): JSX.Element[] | JSX.Element => {
    if (reviews.length > 0 ) {
      return reviews.map((review, index) => (<>
        <div key={index} className={styles.review}>
          <input className={styles.userName}
            type='text' 
            value={review.name}
            autoComplete='off' 
            spellCheck='false' 
            onChange={(event) => {
              setReviews(ReviewService.applyChanges(reviews, event.target.value, index));
              RerenderPage(!render);
            }}
          />
          <button className={styles.delete} onClick={() => {
            setDeletedReviews([...deletedReviews, ReviewService.saveDeletedReview(reviews, index)]);
            setReviews(ReviewService.deleteReview(reviews, index));
            RerenderPage(!render);
          }}></button>
          <div className={styles.background}>
            <textarea 
              className={styles.text}
              value={review.text}
              onChange={(event) => {
                setReviews(ReviewService.applyChanges(reviews, event.target.value, index, true));
                RerenderPage(!render);
              }}
            ></textarea>
          </div>
        </div>
      </>));
    }
    else {
      return <></>;
    }
  }

  return (
    <section className={styles.section}>
      { reviews ? displayReviews() : <></> }

      <footer className={styles.footer}>
        <button className={styles.button} onClick={() => {
          setReviews(ReviewService.addReview(reviews));
          RerenderPage(!render);
        }}>Добавить</button>
        <button className={styles.button} onClick={() => saveData()}>Сохранить</button>
      </footer>
    </section>
  );
}

export default EditReviews;
