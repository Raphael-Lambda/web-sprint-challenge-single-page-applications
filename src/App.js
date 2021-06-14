import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'

import OrderPizza from './components/OrderPizza'
import Congrats from './components/Congrats'
import PizzaHeader from './components/PizzaHeader'
import Welcome from './components/Welcome'
import schema from './components/formSchema'




const App = () => {
  
  // DEFAULT VARS
  const defaultPizza = {
    customerName: '',
    size: 'Medium',
    sauce: '',
    substitute: false,
    more: '',
    quantity: '1',
  }

  const defaultError = {
    customerName: '',
    size: 'Medium',
    sauce: '',
    substitute: false,
    more: '',
    quantity: '1',
    toppings: ''
  }

  const apiURL =`https://reqres.in/api/orders`
  const history = useHistory()
  const toppings = ['Onions', 'Green Peppers', 'Canadian Bacon', 'Pepperoni', 'Sausage', 'Spicy Italian Sausage', 'Grilled Chicken', 'Diced Tomatoes', 'Black Olives', 'Roasted garlic', 'Artichoke Hearts', 'Three Cheese', 'Pineapple', 'Extra Cheese']


  toppings.forEach(top => {defaultPizza[top]= false})
  toppings.forEach(top => {defaultError[top]= false})

  // STATE
  const [ errors, setErrors ] = useState(defaultError)
  const [ pizza, setPizza ] = useState(defaultPizza)
  const [ order, setOrder ] = useState([])
  const [ disable, setDisable ] = useState(true)


  const toppingsLeft = 10 - (toppings.filter(item => pizza[item] === true).length);

  useEffect(() => {
    schema.isValid(pizza)
    .then(valid => setDisable(!valid))
    },[pizza])

  // FUNCTION
  const submitForm = () => {
    axios.post(apiURL, pizza).
    then(response => {
      setOrder([...order, response.data])})
    .catch(err => console.log(err))
    // .finally(() => {
    //   setPizza(defaultPizza);
    //   history.push('/congrats');
    // })
  }

  const change = (name, value) => {
    if(toppingsLeft === 0){return} 
    yup.reach(schema, name)
    .validate(value)
    .then(() => { setErrors({...errors, [name]: ""}) })
    .catch(err => { setErrors({...errors, [name]: err.message}) })
    .finally(() => {
      setPizza({
        ...pizza,
        [name]: value
      })
    })
  }


  
  return (
    <>
      <Route path="/" ><PizzaHeader/></Route>
      <Switch>
        <Route path="/pizza"><OrderPizza toppingsLeft={toppingsLeft} disable={disable} toppings={toppings} pizza={pizza} errors={errors} submitForm={submitForm} change={change}/></Route>
        <Route path="/congrats"><Congrats order={order} toppings={toppings}/></Route>
        <Route path="/" ><Welcome/></Route>
      </Switch>
      
    </>
  );
};
export default App;
