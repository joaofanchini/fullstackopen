const Total = (props) => {
    return <div>
        <p>Total of exercises: {props.parts.map(part => part.exercises)
            .reduce((ac,cv) => ac + cv, 0)}</p>
    </div>
}

export default Total;