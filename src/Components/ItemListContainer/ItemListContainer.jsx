const ItemListContainer = ({greeting}) => {
    const greetingStyle = {
        fontSize: '3rem',
        fontWeight: '700',
        textAlign: 'center',
        color: '#a1a1a1a1'
    }
    return(
        <div style={greetingStyle}>
{greeting}
        </div>
    )
}

export default ItemListContainer;