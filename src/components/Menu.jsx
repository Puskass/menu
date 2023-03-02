import Category from "./Category";

const Menu = ({ menu }) => {
    return (
      <div className="w-4/5 m-auto">
          {menu.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    );
  };
export default Menu;  