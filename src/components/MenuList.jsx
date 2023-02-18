import React from 'react'
import MenuItem from './MenuItem'

const MenuList = () => {
  const menu = [
    {
    title: "Greek Salad with Lettuce",
    ingredients: ["Vegetables", "Romaine Lettuce", "Feta Cheese"],
    price: 8,
    },
    {
    title: "Greek Salad with Lettuce",
    ingredients: ["Vegetables", "Romaine Lettuce", "Feta Cheese"],
    price: 8,
    }
]
const listOfMenuItems = menu.map( (dish) => <MenuItem menu = {dish}/> )
    return (
   
    <ul>{listOfMenuItems}</ul>
  )
}

export default MenuList