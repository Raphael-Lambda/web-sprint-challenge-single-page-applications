const data = [
    {
        name: "coffee",
        description: "delicious coffees and teas",
        menu: {
            Latte: 3,
            expresso: 1,
            earlGrey: 2.5,
            americano: 3,
            ['extra shot']: 1
        }
    },
    {
        name: "salad",
        description: "delicious salads",
        menu: {
            Classic: 8,
            Mediteranean: 10,
            Special: 12.5,
            Greens: 9,
            Romana: 11,
        },
        Classic: "Salad, olives, ham, eggs, cheese",
        Mediteranean:'Salad, olives, tuna, red peppers, corn, olive oil',
        Special: "this is special...",
        Greens: "Salad, green beans, avocado, green peppers, pees",
        Romana: "Artichock Hearts, dried meat, potatoes, pickles, mayonnaise "
        ,
    },
    {
        name: "hamburger",
        description: "delicious Hamburgers",
        menu: {
            Hamburgers: 10,
            Cheesburger: 11,
            ['Double Cheesburger']: 12.5,
            MegaBurger: 15,
            DietBurger: 10,
        }
    },
    {
        name: "pizza",
        description: "delicious pizzas",
        menu: {
            Classic: 10,
            Cheese: 11,
            Calzone: 12.5,
            ['Meat lovers']: 15,
            Vegetarian: 10,
        }
    }
]

export default data