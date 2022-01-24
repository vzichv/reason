import Header from './../../components/header/header';
import ApplicationSection from './../../components/application-section/application-section';
import CoursesSection from './../../components/courses-section/courses-section';

function Landing(): JSX.Element {
  return(
    <>
      <Header />
      <ApplicationSection />
      <CoursesSection />
    </>
  );
}

export default Landing;