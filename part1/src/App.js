import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Total from "./components/total/Total";

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}></Header>
            <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3}
                     exercise3={exercises3}></Content>
            <Total total={exercises1 + exercises2 + exercises3}></Total>
        </div>
    );
};

export default App;
