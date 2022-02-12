import styles from './edit-courses.module.sass';

import axios from 'axios';
import { useState, useEffect } from 'react';

import CourseService from './../../../services/course-service';

import { Course } from './../../../models/course';

function EditCourses(): JSX.Element {
  const [courses, setCourses] = useState<Course[]>([]);
  const [deletedCourses, setDeletedCourses] = useState<string[]>([]);

  // This state help rerender page
  const [render, RerenderPage] = useState<boolean>(false);

  useEffect(() => {
    axios.get('http://localhost:4000/api/courses')
    .then( response => {
      if (response.statusText !== 'OK') {
        return Promise.reject(new Error(`Response failed: ${response.status} (${response.statusText})`));
      }
      return response;
    })
    .then( response => setCourses(response.data))
    .catch( error => console.log(error));
  }, []);

  function saveData() {
    axios.post('http://localhost:4000/api/courses', {
      courses, 
      deletedCourses: deletedCourses
    })
    .then(function(response) {
      console.log(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  const displayCourses = (): JSX.Element[] | JSX.Element => {
    if (courses.length > 0 ) {
      return courses.map((course, index) => (
        <>
          <li key={index}>
            <input className={`${styles.default} ${styles.courseName}`} 
              type='text' autoComplete='off' spellCheck='false' 
              value={course.name} 
              onChange={event => {
                setCourses(CourseService.applyChanges(courses, event.target.value, index, false));
                RerenderPage(!render);
              }}
            />
            {loadPrice(course, index)}
            
            <div 
              className={styles.deleteButton} 
              onClick={() => {
                setDeletedCourses([...deletedCourses, CourseService.saveDeletedCourse(courses, index)]);
                setCourses(CourseService.deleteCourse(courses, index));
                RerenderPage(!render);
              }}>
            </div>
  
          </li>
  
          {loadSubcategories(course, index)}
  
          {addAfterLastCourseOval(index)}
        </>
      ));
    }

    return addAfterLastCourseOval(0);
  }

  function addAfterLastCourseOval(index: number) {
    const lastCourse = (courses[index+1] === undefined);
    if (lastCourse) {
      return (
        <li key={index+1}>
          <div 
            className={styles.addCourse}
            onClick={() => {
              setCourses(CourseService.addCourse(courses, index));
              RerenderPage(!render);
            }}
          ></div>
        </li>
      );
    }
    return <></>;
  }

  function loadPrice(course: Course, index: number): JSX.Element {
    if (course.price === undefined) {
      return (
        <div 
          className={styles.addPrice}
          onClick={() => {
            setCourses(CourseService.addPrice(courses, index));
            RerenderPage(!render);
          }}
        ></div>
      );
    }

    return (
      <input className={`${styles.default} ${styles.coursePrice}`} 
        type='text' 
        autoComplete='off' 
        spellCheck='false' 
        value={`${course.price} ₽`} 
        onChange={event => {
          setCourses(CourseService.applyChanges(courses, event.target.value, index, true));
          RerenderPage(!render);
        }}
      />
    );
  }

  function loadSubcategories(course: Course, index: number) {
    if (course.subcategory === undefined) {
      return (
        <li key={0}>
          <div 
            className={styles.addSubcategory}
            onClick={() => {
              setCourses(CourseService.addSubcategory(courses, index));
              RerenderPage(!render);
            }}
          ></div>
        </li>
      );
    }
   
    if (course.subcategory.length > 0) {
      return course.subcategory.map((subcategory, subcategoryIndex) => (<>
        <li key={subcategoryIndex}>
          <input className={`${styles.default} ${styles.subcategoryName}`} 
            type='text' 
            autoComplete='off' 
            spellCheck='false' 
            key={subcategoryIndex} 
            value={subcategory}
            onChange={event => {
              setCourses(CourseService.applyChanges(courses, event.target.value, index, false, subcategoryIndex));
              RerenderPage(!render);
            }}
          />
          <div className={styles.deleteButton} onClick={(event) => {
            setCourses(CourseService.deleteSubcategory(courses, index, subcategoryIndex));
            RerenderPage(!render);
          }}></div>
        </li>
        {addAfterLastSybcategoryOval(index, course.subcategory as string[], subcategoryIndex)}
      </>));
    }
    return addAfterLastSybcategoryOval(index, course.subcategory as string[], 0);
  }

  function addAfterLastSybcategoryOval(courseIndex: number, subcategories: string[], subcategoryIndex: number) {
    const lastSubcategory = (subcategories[subcategoryIndex+1] === undefined);
    if (lastSubcategory) {
      return (
        <li key={subcategoryIndex+1}>
          <div 
            className={styles.addSubcategory}
            onClick={() => {
              setCourses(CourseService.addSubcategory(courses, courseIndex));
              RerenderPage(!render);
            }}
          ></div>
        </li>
      );
    }
    return <></>;
  }

  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        { courses ? (<>
          { displayCourses() } 
        </>):<></> }
      </ul>
      <button className={styles.saveButton} onClick={() => saveData()}>Сохранить</button> 
    </section>
  )
}

export default EditCourses;
