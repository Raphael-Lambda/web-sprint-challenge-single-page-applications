import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Food = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    border: 3px solid black;
    border-radius: 3px;
    width: 20%;
    margin-top: 30px;
`

const Linked = styled.div`
    border:2px solid grey;
    border-radius: 3px;
    padding 8px 10px;
    background: grey;
    color: orange;
    margin: 10px;
    &:hover{
        background: orange;
        color: grey;
        transform: scale(1.1);
    }
`
const Image = styled.img`
    width: 100%;
    max-height: 150px;
    object-fit: cover;
`

const FoodItem = ({ name }) => {

    const path = "/img/" + name + ".jpg"
    const altText = name + "image"
    const pathType = "/order/" + name
    return(
        <Food>
            <h2>{name}</h2>
            <Image src={path} alt={altText} />
            <p>here goes some description</p>
            <Link to={`/order/${name}`} style={{ textDecoration: 'none' }}><Linked>Order</Linked></Link>
        </Food>
 )
}

export default FoodItem