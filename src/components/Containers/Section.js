function Section(props) {
    const { className } = props

    return (
        <section className={className}>
            {props.children}
        </section>
    )
}

export default Section;