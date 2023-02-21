import React from 'react';

const Card = (props) => {
  return (
    <div className="flex justify-center">
        <div className="bg-accent_orange rounded-lg p-4 mb-10 w-10/12 ">
        <h2 className="text-xl font-bold mb-2">
            {props.title}</h2>
            <p className="">
            {props.price}</p>
        </div>
    </div>
  );
}

export default Card;




