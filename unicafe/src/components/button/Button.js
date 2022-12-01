const Button = ({name, handleOnClick}) => {
    return <button onClick={handleOnClick}> {name} </button>
}

export default Button;