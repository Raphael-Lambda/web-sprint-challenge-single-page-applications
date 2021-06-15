import React from "react";
import { useRouteMatch } from "react-router";
import { Link, Route, useParams } from 'react-router-dom'
import Details from './Details'


const Order = ({data}) => {
    const params = useParams();
    const {url, path} = useRouteMatch();
    const notAvailable = {
        name: params.name,
        description: `${params.name} is not available at the moment`,
        menu:{}
    }


    const food = data.find(item => item.name === params.name) || notAvailable

    return(
        <>
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <ul>
            <li>Dish<span>Price</span></li>
        {Object.entries(food.menu).map(key => {
            return(
                <li><Link to={`${url}/${key[0]}`}>{key[0]}</Link><span>{key[1]}</span></li>
            )
        })}
        </ul>
        <Route path={`${path}/:details`}><Details food={food}/></Route>
        
        </>
    )
}

export default Order