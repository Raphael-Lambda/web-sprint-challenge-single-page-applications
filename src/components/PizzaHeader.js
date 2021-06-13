import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexHead = styled.div`
    background: lightgrey;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
`

const LinkButton = styled.button`
    border:2px solid grey;
    padding: 10px;
    text-decoration: none;
    &:hover{
        background: black;
        color: white;
        transform: scale(1.1);
    }
`

const PizzaHeader = () => {
    return(
        <FlexHead>
            <h1>Lambda eats</h1>
            <div>
                <Link to='/'> <LinkButton >Home </LinkButton></Link>
                <Link to='/pizza'><LinkButton>Pizzas </LinkButton></Link>
                <Link to='/congrats'><LinkButton >My Order </LinkButton></Link>
                <Link to='/'><LinkButton>Help </LinkButton>  </Link>
            </div>
        </FlexHead>

    )

}

export default PizzaHeader