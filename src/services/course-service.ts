import { Course } from './../models/course';

class CourseService {
  public addCourse(courses: Course[], index: number): Course[] {
    const course: Course = {
      name: 'Новый курс'
    };
    courses.push(course);
    return courses;
  }

  public saveDeletedCourse(courses: Course[], index: number): string {
    return (courses[index] as Course & {_id: string})._id;
  }

  public deleteCourse(courses: Course[], index: number): Course[] {
    courses.splice(index, 1);
    return courses;
  }

  public addPrice(courses: Course[], index: number): Course[] {
    courses[index].price = 0
    return courses;
  }

  public addSubcategory(courses: Course[], courseIndex: number): Course[] {
    if (courses[courseIndex].subcategory === undefined) {
      courses[courseIndex].subcategory = ['Новая подкатегория'];
    }
    else {
      courses[courseIndex].subcategory?.push('Новая подкатегория');
    }
    return courses;
  }

  public deleteSubcategory(courses: Course[], courseIndex: number, subcategoryIndex: number): Course[] {
    courses[courseIndex].subcategory?.splice(subcategoryIndex, 1);
    return courses;
  }

  public applyChanges(courses: Course[], value: string, categoryIndex: number, isPrice?: boolean, subcategoryIndex?: number): Course[] {
    try {
      const changeCourseName = ((isPrice === undefined || isPrice === false) && subcategoryIndex === undefined);
      const changePriceValue = (isPrice === true);
      const changeSubcategoryName = (isPrice === false && subcategoryIndex !== undefined);

      if (changeCourseName) {
        courses[categoryIndex].name = value;
      }
      else if (changePriceValue) {
        (courses[categoryIndex] as Required<Course>).price = Number(value.replace(/\D/g,'')); // '100 ₽' -> 100
      }
      else if (changeSubcategoryName) {
        (courses[categoryIndex] as Required<Course>).subcategory[subcategoryIndex] = value;
      }
      else {
        console.group('Нет подходящего условия:');
        console.log(`changeCourseName: ${changeCourseName}`);
        console.log(`changePriceValue: ${changePriceValue}`);
        console.log(`changeSubcategoryName: ${changeSubcategoryName}`);
        console.groupEnd();
      }
      return courses;
    } 
    catch (error) {
      console.log(error);
      return courses;
    }
  }
}

export default new CourseService();
