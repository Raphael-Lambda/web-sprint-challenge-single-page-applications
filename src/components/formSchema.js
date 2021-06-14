import * as yup from 'yup'

// const toppings = ['Onions', 'Green Peppers', 'Canadian Bacon', 'Pepperoni', 'Sausage', 'Spicy Italian Sausage', 'Grilled Chicken', 'Diced Tomatoes', 'Black Olives', 'Roasted garlic', 'Artichoke Hearts', 'Three Cheese', 'Pineapple', 'Extra Cheese']

const schema = yup.object().shape({
    customerName: yup.string().required("customer's name is required").min(3, "customer's name must be 3 characters minimum"),
    sauce: yup.string().oneOf(['Original red', 'Garlic Ranch', 'BBQ Sauce','Spinach Alfredo'], "You must choose a sauce"),
    size: yup.string().oneOf(['Medium', 'Large', 'Small']),
    more: yup.string(), 
    quantity: yup.number(),
    substitute: yup.bool().required().oneOf([false, true]),
    Onions: yup.bool().required().oneOf([false, true]),
    ['Green Peppers']: yup.bool().required().oneOf([false, true]),
    ['Canadian Bacon']: yup.bool().required().oneOf([false, true]),
    Pepperoni: yup.bool().required().oneOf([false, true]),
    Sausage: yup.bool().required().oneOf([false, true]),
    ['Spicy Italian Sausage']: yup.bool().required().oneOf([false, true]),
    ['Grilled Chicken']: yup.bool().required().oneOf([false, true]),
    ['Diced Tomatoes']: yup.bool().required().oneOf([false, true]),
    ['Black Olives']: yup.bool().required().oneOf([false, true]),
    ['Roasted garlic']: yup.bool().required().oneOf([false, true]),
    ['Artichoke Hearts']: yup.bool().required().oneOf([false, true]),
    ['Three Cheese']: yup.bool().required().oneOf([false, true]),
    ['Pineapple']: yup.bool().required().oneOf([false, true]),
    ['Extra Cheese']: yup.bool().required().oneOf([false, true])
})

export default schema


