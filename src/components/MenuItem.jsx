import React from 'react'

const MenuItem = (props) => {
  const menu = props.menu
  return (
   <li>
    <h1>{menu.title}</h1>
    <h3>{menu.price}</h3>
   </li>

  )
}

export default MenuItem
