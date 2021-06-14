const Congrats = ({ order, toppings }) => {
    return(
        <>
        <h2> Your order:</h2>
        {order.map((item, index) => {return(
            <p key={index}>{item.quantity} pizza with {item.sauce} sauce and {Object.keys(item).map((key) => {return( item[key] && toppings.includes(key)? key + " and ":null)})} for {item.name} </p>
        )})}
        </>
    )
}

export default Congrats