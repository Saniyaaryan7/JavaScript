const course = {
    coursename :"JS Repo",
    price :"999",
    courseInstructor :"Saniya"
}
// console.log(course.courseInstructor);

// Object destructuring: extracting 'courseInstructor' and renaming it to 'Instructor'
const {courseInstructor:Instructor}=course
console.log(Instructor);