import React, {useState} from "react";
import CardDetail from "./CardDetail";

const MealCard = ({ meal }) => {
  const [showDetailCard, setShowDetailCard] = useState(false);

  const showDetailCardHandler = () => {
    setShowDetailCard(true)
  }

  const closeDetailCardHandler = () =>{
    setShowDetailCard(false)
  }
  return (
    <>
    <div onClick={showDetailCardHandler} className="text-white bg-accent_orange p-3  mb-5 rounded-lg cursor-pointer" >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">{meal.title}</h3>
        <span className="text-lg font-semibold">{meal.price.toFixed(2)} KM</span>
      </div>
      <p>{meal.ingredients.join(', ')}</p>
    </div>

    {showDetailCard &&
    <CardDetail 
    title={meal.title} 
    description={meal.description} 
    imgUrl={meal.imgUrl}
    onClose={closeDetailCardHandler}/>
    }
    </>
  );
};
export default MealCard;