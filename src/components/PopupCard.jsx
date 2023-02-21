import React from 'react'

const PopupCard = (props) => {
  return (
    <div className='bg-lime-500 w-1/2 h-80'>
        <div className="card">
            <div className="card_body">
            <div className="card_title">{props.title}</div>
            <div className="card_desc">{props.description}</div>
            <img src={props.imgUrl} alt="img" />
            </div>
            <button>Close</button>
        </div>
    </div>
  )
}

export default PopupCard