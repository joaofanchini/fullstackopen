import CoursePart from "../coursePart/CoursePart";

const Course = ({courses}) => {
    return <div>
        {courses.map(course => {
            return <div key={course.id}>
                <h2>{course.name}</h2>
                <CoursePart course={course}></CoursePart>
            </div>
        })}
    </div>
};

export default Course;