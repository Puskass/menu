import React from 'react'
import Card from '../components/Card'

const MenuPage = () => {
  return (
    <div className=' w-screen h-screen'>
    <Card title="Card 1" price="$10" />
    <Card title="Card 2" price="$20" />
    <Card title="Card 3" price="$30" />
    </div>
  )
}

export default MenuPage