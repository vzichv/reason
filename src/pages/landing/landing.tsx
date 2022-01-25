import Header from './../../components/header/header';
import ApplicationSection from './../../components/application-section/application-section';
import CoursesSection from './../../components/courses-section/courses-section';
import ReviewsSection from './../../components/reviews-section/reviews-section';
import OfferSection from './../../components/offer-section/offer-section';

function Landing(): JSX.Element {
  return(
    <>
      <Header />
      <ApplicationSection />
      <CoursesSection />
      <ReviewsSection />
      <OfferSection />
    </>
  );
}

export default Landing;
