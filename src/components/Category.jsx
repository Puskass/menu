import MealCard from "./MealCard";

const Category = ({ category }) => {
    return (
      <div>
        <h2 className="text-white text-3xl font-bold mb-4">{category.name}</h2>
        {category.meals.map((meal) => (
          <MealCard key={meal.name} meal={meal} />
        ))}
      </div>
    );
  };
export default Category;