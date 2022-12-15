import Button from "../Button/Button";

function Box(props) {
    const { className } = props

    return (
        <div className={className}>
            {props.children} 
        </div>
    );
}

export default Box;