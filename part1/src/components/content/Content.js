import Part from "../part/Part";

const Content = (props) => {
    return <div>
        {props.parts.map(part => <Part part={part}></Part>)}
    </div>
}

export default Content;