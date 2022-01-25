import styles from './courses-section.module.sass';
import SectionHeader from './../section-header/section-header';
import SubsectionHeader from './../subsection-header/subsection-header';

function CoursesSection(): JSX.Element {
  return(
    <section>
      <SectionHeader backgroundColor={2} text='Обучение в автошколе!' />
      <SubsectionHeader backgroundColor={2} text='Курсы'/>
      <div className={styles.coursesBlock}>
        <ul className={styles.coursesList}>

          <li className={styles.course}>
            <span className={styles.courseName}>
              <span>•</span> Механическая коробка переключения передач
              <abbr title="Механическая Коробка Переключения Передач"> (МКПП)</abbr>
            </span>

            <li className={styles.factAboutCourse}><span className={styles.fact}>• Категория «B»</span></li>
          </li>

          <li className={styles.course}>
            <span className={styles.courseName}>
              <span>•</span> Автоматическая коробка переключения передач 
              <abbr title="Автоматическая Коробка Переключения Передач"> (АКПП)</abbr>
            </span>

            <li className={styles.factAboutCourse}><span className={styles.fact}>• Категория «B»</span></li>
          </li>

          <li className={styles.course}>
            <span className={styles.courseName}><span>•</span> Восстановление навыков</span>

            <li className={styles.factAboutCourse}><span className={styles.fact}>• Активное маневрирование</span></li>
            <li className={styles.factAboutCourse}><span className={styles.fact}>• Возможен выезд на Вашем авто!</span></li>
          </li>

          <li className={styles.course}>
            <span className={styles.courseName}><span>•</span> Паркинг</span>
            <li className={styles.factAboutCourse}>
              <span className={styles.fact}>• Изучение 8 видов парковки в реальных условиях:</span>

              <li><span>• Парковка передом под прямым углом на обе стороны</span></li>
              <li><span>• Параллельная парковка на правую</span></li>
              <li><span>• Парковка на левую сторону дороги</span></li>
              <li><span>• Заезд в бокс задним ходом</span></li>
              <li><span>• Заезд в бокс задним ходом под углом 90 ° </span></li>
              <li><span>• Заезд в бокс задним ходом в ограниченном пространстве</span></li>
              <li><span>• Разворот в ограниченном пространстве</span></li>
              <li><span>• Движение в крытых паркингах</span></li>
            </li>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default CoursesSection;