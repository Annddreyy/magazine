const withPaginator = (Component) => {
    return function wrappedFunction(props) {
        return (
            <Component { ...props } />
        )
    }
};