import styles from './admin-panel.module.sass';

import EditCourses from './edit-courses/edit-courses';
import EditReviews from './edit-reviews/edit-reviews';
import EditOffers from './edit-offers/edit-offers';
import EditApplications from './edit-applications/edit-applications';

import { NavLink, Routes, Route } from 'react-router-dom';

function AdminComponent(): JSX.Element {
  return (
    <div className={styles.background}>

      <section className={styles.mainBlock}>

        <nav className={styles.navMenu}>
          <NavLink to="courses" className={styles.button}>Курсы</NavLink>
          <NavLink to="reviews" className={styles.button}>Отзывы</NavLink>
          <NavLink to="offers" className={styles.button}>Предложения</NavLink>
          <NavLink to="applications" className={styles.button}>Заявки</NavLink>
        </nav>
        
        <Routes>
          <Route path="courses" element={<EditCourses />} />
          <Route path="reviews" element={<EditReviews />} />
          <Route path="offers" element={<EditOffers />} />
          <Route path="applications" element={<EditApplications />} />
        </Routes>

      </section>

    </div>
  )
}

export default AdminComponent;