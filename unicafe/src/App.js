import {useState} from 'react'
import Button from "./components/button/Button";
import Statistics from "./components/statistics/Statistics";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <div>
                <Button name={"Good"} handleOnClick={() => setGood(good + 1)}></Button>
                <Button name={"Neutral"} handleOnClick={() => setNeutral(neutral + 1)}></Button>
                <Button name={"Bad"} handleOnClick={() => setBad(bad + 1)}></Button>
            </div>
            <h1>Statistcs</h1>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

export default App;