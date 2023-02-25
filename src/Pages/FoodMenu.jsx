const foodItems = [
    {
      category: "Salads",
      meals: [
        {
          id: 1,
          title: "Greek Salad with Lettuce",
          ingredients: ["Vegetables", "Romaine Lettuce", "Feta Cheese"],
          price: 8,
          imgUrl:
            "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
          description:
            "The perfect Greek salad with fresh tomatoes, cucumbers, red onions, green peppers, romaine lettuce, olives and feta cheese tossed in a lemon vinaigrette.",
        },
        {
          id: 2,
          title: "Chicken Garden Salad",
          ingredients: [
            "Vegetables",
            "Ranch Dressing",
            "Grilled Chicken",
            "Crunchy Croutons",
          ],
          price: 11,
          imgUrl:
            "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
  
          description:
            "Chicken garden salad with ranch dressing is fresh, healthy, and hearty. This vibrant and colorful salad is loaded with grilled chicken, fresh vegetables, and crunchy croutons. It's a delicious chopped salad that is packed with nutrients so you can feel good about eating this one.",
        },
        {
          id: 3,
          title: "Mediterranean Orzo Pasta Salad",
          imgUrl:
            "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
  
          ingredients: ["Orzo", "Vegetables", "Feta Cheese"],
          price: 9,
          description:
            "This summer has been all about the Mediterranean vibes. There is just something about the bright and vibrant vegetables, the lemony and olive oil flavours and all the fresh herbs, that screams summer. ",
        },
        {
          id: 4,
          title: "Grilled Shrimp Salad",
          ingredients: ["Avocado", "Schrimps", "Lemon", "Red Onion", "Spinach"],
          price: 17,
          imgUrl:
            "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
  
          description:
            "Grilled shrimp salad is a quick and easy, healthy summer meal that is loaded with fresh, flavorful ingredients, all tossed in an easy homemade dressing.",
        },
      ],
    },
    
    {
      category: "Sushi",
      meals: [
        {
          id: 5,
          title: "Spicy Salmon Roll",
          ingredients: ["Rice", "Salmon", "Nori", "Avocado", "Spicy Sauce"],
          price: 16,
          imgUrl:
            "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",
  
          description:
            "Spicy salmon roll is a type of maki (sushi roll) made from raw salmon, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), and sushi rice, wrapped in nori (seaweed). It can be rolled inside-out or with the seaweed on the outside, and other flavors can be added.",
        },
        {
          id: 6,
          title: "Spicy Tuna Roll",
          ingredients: ["Rice", "Tuna", "Nori", "Avocado", "Spicy Sauce"],
          price: 13,
          imgUrl:
            "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",
  
          description:
            "Spicy tuna roll is a type of maki (sushi roll) made from raw tuna, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), and sushi rice, wrapped in nori (seaweed). It can be rolled inside-out or with the seaweed on the outside, and other flavors can be added.",
        },
        {
          id: 7,
          title: "Mango Salmon Roll",
          imgUrl:
            "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",
  
          ingredients: [
            "Rice",
            "Salmon",
            "Nori",
            "Avocado",
            "Mango",
            "Mango Sauce",
          ],
          price: 25,
          description:
            "Mango salmon roll is a type of maki (sushi roll) made from raw salmon, spicy mango sauce, and sushi rice, wrapped in nori (seaweed). ",
        },
        {
          id: 8,
          imgUrl:
            "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",
  
          title: "Salmon Nigiri",
          ingredients: ["Rice", "Salmon"],
          price: 9,
          description:
            "Salmon nigiri consists a slice of raw salmon served over pressed vinegar rice.",
        },
        {
          id: 9,
          title: "Tuna Nigiri",
          imgUrl:
            "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",
  
          ingredients: ["Rice", "Tuna"],
          price: 9,
          description:
            "Tuna nigiri consists a slice of raw tuna served over pressed vinegar rice.",
        },
        {
          id: 10,
          title: "Schrimp Tempura Roll",
          imgUrl:
            "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",
  
          ingredients: [
            "Rice",
            "Schrimp",
            "Nori",
            "Avocado",
            "Smooth Sauce",
            "Tobiko",
          ],
          price: 30,
          description:
            "With crunchy shrimp tempura, creamy slices of avocado, and crisp lettuce rolled with sushi rice and nori, this tempura roll has a mouthwatering combination of textures and flavors that makes these as fun to eat as they are delicious.",
        },
      ],
    },
  
    {
      category: "Pasta",
      meals: [
        {
          id: 11,
          title: "Quatro Formagi Pasta",
          imgUrl:
            "https://njam.tv/thumbnail/inline/108233/pasta-met-spicy-chorizosaus-3.jpg",
  
          ingredients: [
            "Fusilli",
            "Mozzarella",
            "Parmesan",
            "Gorgonzolla",
            "Brie",
          ],
          price: 13,
          description:
            "Pasta with strong and rich flavours. Combination of mozzarella parmesan gorgonzolla and brie cheese with fusilli pasta creates beautiful smooth texture with rich flavours that is ready for everyone",
        },
        {
          id: 12,
          title: "Italian Fusilli",
          imgUrl:
            "https://njam.tv/thumbnail/inline/108233/pasta-met-spicy-chorizosaus-3.jpg",
  
          ingredients: [
            "Gamberi",
            "Cherry Tomato",
            "Basil",
            "Parmesan",
            "Garlic with Olive Oil",
          ],
          price: 20,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe, laudantium, debitis sapiente temporibus quod vitae voluptas quisquam nobis id hic quasi nemo ipsum officia porro deleniti soluta ratione iure distinctio repudiandae cupiditate nam consequuntur. Quis aperiam fugit expedita fugiat!",
        },
        {
          id: 13,
          title: "Lasagne",
          ingredients: ["Beef ragu", "Cheese", "Bechamel", "Basil"],
          price: 14,
          imgUrl:
            "https://njam.tv/thumbnail/inline/108233/pasta-met-spicy-chorizosaus-3.jpg",
  
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe, laudantium, debitis sapiente temporibus quod vitae voluptas quisquam nobis id hic quasi nemo ipsum officia porro deleniti soluta ratione iure distinctio repudiandae cupiditate nam consequuntur. Quis aperiam fugit expedita fugiat!",
        },
  
        {
          id: 14,
          title: "Basil Tagliatelle",
          imgUrl:
            "https://njam.tv/thumbnail/inline/108233/pasta-met-spicy-chorizosaus-3.jpg",
  
          ingredients: [
            "Tagliatelle",
            "Basil Pesto",
            "Parmesan",
            "Cherry Cheese",
          ],
          price: 12,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe, laudantium, debitis sapiente temporibus quod vitae voluptas quisquam nobis id hic quasi nemo ipsum officia porro deleniti soluta ratione iure distinctio repudiandae cupiditate nam consequuntur. Quis aperiam fugit expedita fugiat!",
        },
      ],
    },
  ];
  const FoodMenu = () => {
    return (
      <div className="">
        {foodItems.map((section) => (
          <div className="">
            <h2 className="text-white font-bold text-5xl pl-48 mb-8">{section.category}</h2>
            <ul className="mb-10">
            {section.meals.map((item) => (
            <div className="flex justify-center ">
            <div className="mb-4 rounded-lg bg-accent_orange w-4/5">  
            
            <div className="flex items-center justify-between  ">
            <div><li className="text-white font-semibold text-2xl p-3">{item.title}</li></div>
            <div><li className="text-white pr-3 font-semibold">{item.price} KM</li></div>
            </div>
        
            <li className="text-white pl-3 pb-3">{item.ingredients.join(", ")}</li>
            
            </div>
            </div>
            ))}          
            </ul>
          </div>
        ))}
      </div>
    );
  };
  export default FoodMenu
  