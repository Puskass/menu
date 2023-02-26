import MealCard from "./MealCard";

const Category = ({ category }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold">{category.name}</h2>
        {category.meals.map((meal) => (
          <MealCard key={meal.name} meal={meal} />
        ))}
      </div>
    );
  };
export default Category;