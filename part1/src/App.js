import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Total from "./components/total/Total";

const App = () => {
    const course = 'Half Stack application development'
    const parts =[
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
    return (
        <div>
            <Header course={course}></Header>
            <Content parts={parts}></Content>
            <Total parts = {parts}></Total>
        </div>
    );
};

export default App;
