import { Review } from './../models/review';

class ReviewService {
  public addReview(reviews: Review[]): Review[] {
    const review: Review = {
      name: 'Имя Фамилия',
      text: 'Текст отзыва'
    };
    reviews.push(review);
    return reviews;
  }

  public saveDeletedReview(reviews: Review[], index: number): string {
    return (reviews[index] as Review & {_id: string})._id;
  }

  public deleteReview(reviews: Review[], index: number): Review[] {
    reviews.splice(index, 1);
    return reviews;
  }

  public applyChanges(reviews: Review[], value: string, index: number, isText?: boolean): Review[] {
    try {
      if (isText === undefined || isText === false) {
        reviews[index].name = value;
      }
      else if (isText === true) {
        reviews[index].text = value;
      }
      else {
        new Error('Ни одно из условий не оказалось верным.');
      }
      return reviews;
    } 
    catch (error) {
      console.log(error);
      return reviews;
    }
  }
}

export default new ReviewService();
