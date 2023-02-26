const MealCard = ({ meal }) => {
  return (
    <div className="p-3 text-white bg-accent_orange rounded-lg cursor-pointer mb-5" >
      <div className="flex justify-between">
        <h3 className="text-2xl">{meal.title}</h3>
        <span className="text-lg font-semibold">{meal.price.toFixed(2)} KM</span>
      </div>
      <p className="">{meal.ingredients.join(', ')}</p>
    </div>
  );
};
export default MealCard;