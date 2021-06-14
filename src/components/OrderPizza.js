import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainDiv = styled.form`
    margin: 2% 20%;
    border: 3px solid black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    // test height: 200vh;
`
const SubDiv = styled.div`
    box-sizing: border-box;
    padding: 15px 30px;
    width: 100%;
    max-height: 20%;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    align-content: space-between;
`
const TitleDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    font-weight: bold;
    padding: 15px 5px;
    background: grey;
    color: white;
    display: flex;
    flex-flow: column nowrap;
`
const MainTitle = styled.h2`
    font-weight: bold;
    text-align: center;
    width: 100%;
`
const Label = styled.label`
    display: flex;
    flex-flow: row nowrap;
`
const SubDivRaw =styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    border-top: 2px solid black;
`
const PizzaWelcome = styled.img`
    width: 100%;
    max-height: 25vh;
    object-fit: cover;
`
const Error = styled.p`
    color: orange;
    font-variant: small-caps;
    font-size: .8em;
`


const OrderPizza = ({ submitForm, change, pizza, toppings, errors, disable, toppingsLeft }) => {
    const { customerName, size, sauce, substitute, more, quantity } = pizza

    const onsubmit = e => {
        e.preventDefault()
        submitForm()
    }

    const onchange = ({ target }) => {
        const {name, value, checked, type} = target
        const valueToUse = type === "checkbox"? checked: value
        change(name, valueToUse)
    }

    return(
        <MainDiv id="pizza-form" action="/pizza" onSubmit={onsubmit}>
            <MainTitle>Build your own pizza</MainTitle>
            <PizzaWelcome src="/img/pizza.jpg" alt="pizza image"/>
            <TitleDiv>Name <Error>{errors.customerName}</Error></TitleDiv>

            <SubDiv>
                <input id="name-input" name="customerName" placeholder="enter your name" value={customerName} onChange={onchange}/>
            </SubDiv>

            <TitleDiv>Choice of Size</TitleDiv>
            <SubDiv>
                <select id="size-dropdown" name="size" onChange={onchange} value={size}>
                    <option value='Big'>Big</option>
                    <option value='Medium'>Medium</option>
                    <option value='Small'>Small</option>
                </select>
            </SubDiv>
            <TitleDiv>Choice of Sauce<Error>{errors.sauce}</Error></TitleDiv>
            <SubDiv>
                <Label>Original red<input name="sauce" id="Original-red" type="radio" value="Original red" checked={sauce === "Original red"} onChange={onchange}/></Label>
                <Label>Garlic Ranch<input name="sauce" type="radio" value="Garlic Ranch" checked={sauce === "Garlic Ranch"} onChange={onchange}/></Label>
                <Label>BBQ Sauce<input name="sauce" type="radio" value="BBQ Sauce" checked={sauce === "BBQ Sauce"} onChange={onchange}/></Label>
                <Label>Spinach Alfredo<input name="sauce" type="radio" value="Spinach Alfredo" checked={sauce === "Spinach Alfredo"} onChange={onchange}/></Label>
            </SubDiv>
            <TitleDiv>Add Toppings <Error>{`You can choose ${toppingsLeft} more`}</Error></TitleDiv>
            <SubDiv id="toppings">
                {toppings.map(item => {
                    return (
                    <Label key={item}>{item}<input id={item} name={item} type="checkbox" checked={pizza[item]} onChange={onchange}/></Label>
                    )}
                )}
            </SubDiv>
            <TitleDiv>Choice of Substitute</TitleDiv>
            <SubDiv>
                <Label>Gluten free <input type="checkbox" name="substitute" checked={substitute} onChange={onchange}/></Label>
            </SubDiv>
            <TitleDiv>More...</TitleDiv>
            <SubDiv>
                <input type="text" id="special-text" name="more" value={more} onChange={onchange} placeholder="Anything else you'd like to add?"/>
            </SubDiv>
            <SubDivRaw>
                <input type="number" name="quantity" value={quantity} placeholder="1" min="1" max="20" onChange={onchange}/>
                <button id="order-button" type="submit" disabled={disable}>Add to Order <span>price</span></button>
            </SubDivRaw>
        </MainDiv>
        
    )
}

export default OrderPizza