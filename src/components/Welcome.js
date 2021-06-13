import { Link } from 'react-router-dom'
import styled from 'styled-components'

import FoodItem from './FoodItem'

const PizzaWelcome = styled.img`
    width: 100%;
    max-height: 45vh;
    object-fit: cover;
`

const OtherFood = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-content: space-around;
`
const foods = ["coffee", "hamburger", "salad", "pizza"]

const Welcome = () => {
    return(
        <>
        <Link to="/pizza">
            <PizzaWelcome id="order-pizza" src="/img/pizza.jpg" alt="Welcome Image" />
        </Link>
        <OtherFood>
            {
                foods.map((item) =>{
                    return <FoodItem key={item} name={item}></FoodItem>
                })
            }
        </OtherFood>
        </>
    )
}

export default Welcome