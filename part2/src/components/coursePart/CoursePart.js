const CoursePart = ({course}) => {
    const sumExercises  = (sum, part) => {
        return sum + part.exercises;
    }
    return <>
        {course.parts.map(part => {
            return <p key={part.id}>{part.name} {part.exercises}</p>
        })}

        <p>Total of {course.parts.reduce((sum,part) => sumExercises(sum,part), 0)} exercices</p>
    </>
};

export default CoursePart;