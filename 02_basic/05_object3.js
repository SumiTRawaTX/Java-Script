// node 02_basic/05_object3

//destructuring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Sumit"
}

//for access
console.log(course.courseInstructor); // method 1

//method 2
const {courseInstructor} = course;
console.log(courseInstructor);

//now destructuring
const {courseInstructor: instructor} = course;
console.log(instructor);
