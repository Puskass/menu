const foodMenu = [
  {
    id: Math.random().toString(),
    name: "Salads",
    meals: [
      {
        id: Math.random().toString(),
        title: "Greek Salad with Lettuce",
        ingredients: ["Vegetables", "Romaine Lettuce", "Feta Cheese"],
        price: 8,
        imgUrl:
          "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
        description:
          "The perfect Greek salad with fresh tomatoes, cucumbers, red onions, green peppers, romaine lettuce, olives and feta cheese tossed in a lemon vinaigrette.",
      },
      {
        id: Math.random().toString(),
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
        id: Math.random().toString(),
        title: "Mediterranean Orzo Pasta Salad",
        imgUrl:
          "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",

        ingredients: ["Orzo", "Vegetables", "Feta Cheese"],
        price: 9,
        description:
          "This summer has been all about the Mediterranean vibes. There is just something about the bright and vibrant vegetables, the lemony and olive oil flavours and all the fresh herbs, that screams summer. ",
      },
      {
        id: Math.random().toString(),
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
    id: Math.random().toString(),
    name: "Sushi",
    meals: [
      {
        id: Math.random().toString(),
        title: "Spicy Salmon Roll",
        ingredients: ["Rice", "Salmon", "Nori", "Avocado", "Spicy Sauce"],
        price: 16,
        imgUrl:
          "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",

        description:
          "Spicy salmon roll is a type of maki (sushi roll) made from raw salmon, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), and sushi rice, wrapped in nori (seaweed). It can be rolled inside-out or with the seaweed on the outside, and other flavors can be added.",
      },
      {
        id: Math.random().toString(),
        title: "Spicy Tuna Roll",
        ingredients: ["Rice", "Tuna", "Nori", "Avocado", "Spicy Sauce"],
        price: 13,
        imgUrl:
          "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",

        description:
          "Spicy tuna roll is a type of maki (sushi roll) made from raw tuna, spicy sauce (Japanese-style mayonnaise mixed with chili sauce), and sushi rice, wrapped in nori (seaweed). It can be rolled inside-out or with the seaweed on the outside, and other flavors can be added.",
      },
      {
        id: Math.random().toString(),
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
        id: Math.random().toString(),
        imgUrl:
          "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",

        title: "Salmon Nigiri",
        ingredients: ["Rice", "Salmon"],
        price: 9,
        description:
          "Salmon nigiri consists a slice of raw salmon served over pressed vinegar rice.",
      },
      {
        id: Math.random().toString(),
        title: "Tuna Nigiri",
        imgUrl:
          "https://www.sushipoint.nl/content/uploads/pexels-vinicius-benedit-3620705.jpg",

        ingredients: ["Rice", "Tuna"],
        price: 9,
        description:
          "Tuna nigiri consists a slice of raw tuna served over pressed vinegar rice.",
      },
      {
        id: Math.random().toString(),
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
    id: Math.random().toString(),
    name: "Pasta",
    meals: [
      {
        id: Math.random().toString(),
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
        id: Math.random().toString(),
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
        id: Math.random().toString(),
        title: "Lasagne",
        ingredients: ["Beef ragu", "Cheese", "Bechamel", "Basil"],
        price: 14,
        imgUrl:
          "https://njam.tv/thumbnail/inline/108233/pasta-met-spicy-chorizosaus-3.jpg",

        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe, laudantium, debitis sapiente temporibus quod vitae voluptas quisquam nobis id hic quasi nemo ipsum officia porro deleniti soluta ratione iure distinctio repudiandae cupiditate nam consequuntur. Quis aperiam fugit expedita fugiat!",
      },

      {
        id: Math.random().toString(),
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
]
    
  export default foodMenu;