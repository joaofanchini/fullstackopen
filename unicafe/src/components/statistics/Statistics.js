const Statistics = ({good, neutral, bad}) => {
    let all = good + neutral + bad;
    let positive = good / all;
    let average = (good - (bad + neutral)) / all;

    return <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {average}</p>
        <p>positive {positive}</p>
    </div>
};

export default Statistics;