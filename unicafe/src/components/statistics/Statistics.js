import StatisticsLine from "../statisticsLine/StatisticsLine";

const Statistics = ({good, neutral, bad}) => {
    let all = good + neutral + bad;
    let positive = good / all * 100;
    let average = (good - (bad + neutral)) / all;

    if (all === 0) {
        return <div>
            <p>No feedback was given</p>
        </div>
    }

    return <table>
        <tbody>
        <tr>
            <td><StatisticsLine name={"good"} value={good}></StatisticsLine></td>
        </tr>
        <tr>
            <td><StatisticsLine name={"neutral"} value={neutral}></StatisticsLine></td>
        </tr>
        <tr>
            <td><StatisticsLine name={"bad"} value={bad}></StatisticsLine></td>
        </tr>
        <tr>
            <td><StatisticsLine name={"all"} value={all}></StatisticsLine></td>
        </tr>
        <tr>
            <td><StatisticsLine name={"average"} value={average}></StatisticsLine></td>
        </tr>
        <tr>
            <td><StatisticsLine name={"positive"} value={positive + "%"}></StatisticsLine></td>
        </tr>
        </tbody>
    </table>
};

export default Statistics;