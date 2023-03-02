import MealCard from "./MealCard";

const Category = ({ category }) => {
    return (
      <div className="mb-32">
        <h2 className="text-white text-3xl font-bold mb-4">{category.name}</h2>
        {category.meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    );
  };
export default Category;