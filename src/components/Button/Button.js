function Button(props) {
    const { className, value } = props
    return <button className={className}>{ value }</button>;
}

export default Button;