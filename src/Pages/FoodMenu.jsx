import foodItems from '../data/FoodItems'
  
const FoodMenu = () => {
    return (
      <>
        {foodItems.map((section) => (
          <div>
            <h2 className="text-white font-bold text-4xl pl-48 mb-8">{section.category}</h2>
            <ul className="mb-48">
            {section.meals.map((item) => (
            <div className="flex justify-center">
            
            <div className="mb-4 rounded-lg bg-accent_orange w-4/5">  
            <div className="flex items-center justify-between">
            <div><li className="text-white font-semibold text-2xl p-3">{item.title}</li></div>
            <div><li className="text-white pr-3 font-semibold text-lg">{item.price} KM</li></div>
            </div>
            <li className="text-white pl-3 pb-3">{item.ingredients.join(", ")}</li>
            </div>
            
            </div>
            ))}          
            </ul>
          </div>
        ))}
      </>
    );
  };
  export default FoodMenu
  