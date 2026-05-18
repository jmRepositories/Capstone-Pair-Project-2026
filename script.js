 let recipies = JSON.parse(sessionStorage.getItem("recipies")) || [
    // ======================
    // ITALIAN
    // ======================
  
    {
      dataCategory: "starter",
      name: "Bruschetta",
      type: "Italian",
      cookTime: "15 minutes",
      calories: 240,
      img: "images/bruschetta.jpg",
      description: "Toasted bread topped with tomatoes and basil.",
      steps: [
        "Toast bread slices.",
        "Dice tomatoes and basil.",
        "Mix with olive oil and garlic.",
        "Top bread with mixture.",
        "Serve immediately."
      ]
    },
    {
      dataCategory: "starter",
      name: "Caprese Salad",
      type: "Italian",
      cookTime: "10 minutes",
      calories: 210,
      img: "images/caprese-salad.jpg",
      description: "Fresh mozzarella, tomatoes, and basil salad.",
      steps: [
        "Slice tomatoes and mozzarella.",
        "Arrange on plate.",
        "Add basil leaves.",
        "Drizzle olive oil.",
        "Season and serve."
      ]
    },
  
    {
      dataCategory: "main",
      name: "Chicken Alfredo",
      type: "Italian",
      cookTime: "35 minutes",
      calories: 720,
      img: "images/chicken-alfredo.jpg",
      description: "Creamy Alfredo pasta with grilled chicken.",
      steps: [
        "Cook pasta.",
        "Grill seasoned chicken.",
        "Prepare Alfredo sauce.",
        "Combine pasta and sauce.",
        "Top with chicken."
      ]
    },
    {
      dataCategory: "main",
      name: "Lasagna",
      type: "Italian",
      cookTime: "1 hour",
      calories: 780,
      img: "images/lasagna.jpg",
      description: "Layered pasta with meat sauce and cheese.",
      steps: [
        "Cook noodles.",
        "Prepare meat sauce.",
        "Layer sauce, noodles, and cheese.",
        "Bake until golden.",
        "Cool slightly before serving."
      ]
    },
  
    {
      dataCategory: "dessert",
      name: "Tiramisu",
      type: "Italian",
      cookTime: "40 minutes",
      calories: 450,
      img: "images/tiramisu.jpg",
      description: "Coffee-flavored layered Italian dessert.",
      steps: [
        "Dip ladyfingers in coffee.",
        "Layer with mascarpone mixture.",
        "Repeat layers.",
        "Dust cocoa powder.",
        "Chill before serving."
      ]
    },
    {
      dataCategory: "dessert",
      name: "Cannoli",
      type: "Italian",
      cookTime: "45 minutes",
      calories: 390,
      img: "images/cannoli.jpg",
      description: "Crispy pastry shells filled with sweet cream.",
      steps: [
        "Prepare cannoli shells.",
        "Fry until crispy.",
        "Mix ricotta filling.",
        "Fill shells.",
        "Dust powdered sugar."
      ]
    },
  
    // ======================
    // MEXICAN
    // ======================
  
    {
      dataCategory: "starter",
      name: "Nachos",
      type: "Mexican",
      cookTime: "15 minutes",
      calories: 340,
      img: "images/nachos.jpg",
      description: "Crunchy tortilla chips topped with melted cheese.",
      steps: [
        "Spread chips on tray.",
        "Add cheese and toppings.",
        "Bake until melted.",
        "Top with salsa.",
        "Serve warm."
      ]
    },
    {
      dataCategory: "starter",
      name: "Guacamole",
      type: "Mexican",
      cookTime: "10 minutes",
      calories: 190,
      img: "images/guacamole.jpg",
      description: "Fresh avocado dip with lime and spices.",
      steps: [
        "Mash avocados.",
        "Add lime juice.",
        "Mix onions and tomatoes.",
        "Season to taste.",
        "Serve fresh."
      ]
    },
  
    {
      dataCategory: "main",
      name: "Beef Tacos",
      type: "Mexican",
      cookTime: "25 minutes",
      calories: 620,
      img: "images/beef-tacos.jpg",
      description: "Seasoned beef tacos with lettuce and cheese.",
      steps: [
        "Cook seasoned beef.",
        "Warm taco shells.",
        "Add beef to shells.",
        "Top with lettuce and cheese.",
        "Serve immediately."
      ]
    },
    {
      dataCategory: "main",
      name: "Chicken Quesadilla",
      type: "Mexican",
      cookTime: "20 minutes",
      calories: 650,
      img: "images/quesadilla.jpg",
      description: "Cheesy grilled tortilla stuffed with chicken.",
      steps: [
        "Cook chicken.",
        "Add cheese to tortilla.",
        "Add chicken filling.",
        "Fold and grill.",
        "Slice and serve."
      ]
    },
  
    {
      dataCategory: "dessert",
      name: "Churros",
      type: "Mexican",
      cookTime: "30 minutes",
      calories: 420,
      img: "images/churros.jpg",
      description: "Fried dough coated in cinnamon sugar.",
      steps: [
        "Prepare dough.",
        "Pipe into hot oil.",
        "Fry until golden.",
        "Roll in cinnamon sugar.",
        "Serve warm."
      ]
    },
    {
      dataCategory: "dessert",
      name: "Tres Leches Cake",
      type: "Mexican",
      cookTime: "50 minutes",
      calories: 510,
      img: "images/tres-leches.jpg",
      description: "Soft sponge cake soaked in three milks.",
      steps: [
        "Bake sponge cake.",
        "Mix milk mixture.",
        "Pour over cake.",
        "Chill thoroughly.",
        "Top with whipped cream."
      ]
    },
  
    // ======================
    // JAPANESE
    // ======================
  
    {
      dataCategory: "starter",
      name: "Miso Soup",
      type: "Japanese",
      cookTime: "15 minutes",
      calories: 120,
      img: "images/miso-soup.jpg",
      description: "Traditional soup with tofu and seaweed.",
      steps: [
        "Boil broth.",
        "Add tofu and seaweed.",
        "Stir in miso paste.",
        "Heat gently.",
        "Serve hot."
      ]
    },
    {
      dataCategory: "starter",
      name: "Edamame",
      type: "Japanese",
      cookTime: "10 minutes",
      calories: 160,
      img: "images/edamame.jpg",
      description: "Steamed soybeans lightly salted.",
      steps: [
        "Boil edamame.",
        "Drain water.",
        "Sprinkle sea salt.",
        "Toss lightly.",
        "Serve warm."
      ]
    },
  
    {
      dataCategory: "main",
      name: "Ramen Bowl",
      type: "Japanese",
      cookTime: "40 minutes",
      calories: 690,
      img: "images/ramen.jpg",
      description: "Savory noodle soup with pork and egg.",
      steps: [
        "Prepare broth.",
        "Cook noodles.",
        "Slice pork.",
        "Assemble bowl.",
        "Add toppings and serve."
      ]
    },
    {
      dataCategory: "main",
      name: "Chicken Teriyaki",
      type: "Japanese",
      cookTime: "30 minutes",
      calories: 610,
      img: "images/teriyaki.jpg",
      description: "Sweet glazed chicken served with rice.",
      steps: [
        "Cook chicken.",
        "Prepare teriyaki sauce.",
        "Coat chicken in sauce.",
        "Serve over rice.",
        "Garnish with sesame seeds."
      ]
    },
  
    {
      dataCategory: "dessert",
      name: "Mochi Ice Cream",
      type: "Japanese",
      cookTime: "25 minutes",
      calories: 300,
      img: "images/mochi.jpg",
      description: "Soft rice dough filled with ice cream.",
      steps: [
        "Prepare mochi dough.",
        "Flatten dough pieces.",
        "Add ice cream scoop.",
        "Seal dough around filling.",
        "Freeze before serving."
      ]
    },
    {
      dataCategory: "dessert",
      name: "Dorayaki",
      type: "Japanese",
      cookTime: "20 minutes",
      calories: 350,
      img: "images/dorayaki.jpg",
      description: "Sweet pancakes filled with red bean paste.",
      steps: [
        "Make pancake batter.",
        "Cook small pancakes.",
        "Spread bean paste.",
        "Sandwich pancakes together.",
        "Serve fresh."
      ]
    },
  
    // ======================
    // INDIAN
    // ======================
  
    {
      dataCategory: "starter",
      name: "Samosas",
      type: "Indian",
      cookTime: "30 minutes",
      calories: 320,
      img: "images/samosas.jpg",
      description: "Crispy pastry stuffed with spiced potatoes.",
      steps: [
        "Prepare potato filling.",
        "Fill pastry dough.",
        "Fold into triangles.",
        "Deep fry until golden.",
        "Serve with chutney."
      ]
    },
    {
      dataCategory: "starter",
      name: "Pakora",
      type: "Indian",
      cookTime: "20 minutes",
      calories: 280,
      img: "images/pakora.jpg",
      description: "Vegetable fritters fried until crispy.",
      steps: [
        "Slice vegetables.",
        "Prepare chickpea batter.",
        "Coat vegetables.",
        "Fry until crispy.",
        "Serve hot."
      ]
    },
  
    {
      dataCategory: "main",
      name: "Butter Chicken",
      type: "Indian",
      cookTime: "45 minutes",
      calories: 730,
      img: "images/butter-chicken.jpg",
      description: "Creamy tomato curry with tender chicken.",
      steps: [
        "Marinate chicken.",
        "Cook chicken pieces.",
        "Prepare tomato sauce.",
        "Add cream and spices.",
        "Serve with naan."
      ]
    },
    {
      dataCategory: "main",
      name: "Biryani",
      type: "Indian",
      cookTime: "1 hour",
      calories: 760,
      img: "images/biryani.jpg",
      description: "Spiced rice dish with meat and herbs.",
      steps: [
        "Cook rice partially.",
        "Prepare spiced meat.",
        "Layer rice and meat.",
        "Steam until cooked.",
        "Serve hot."
      ]
    },
  
    {
      dataCategory: "dessert",
      name: "Gulab Jamun",
      type: "Indian",
      cookTime: "35 minutes",
      calories: 430,
      img: "images/gulab-jamun.jpg",
      description: "Sweet milk dough balls in syrup.",
      steps: [
        "Prepare dough balls.",
        "Fry until golden.",
        "Make sugar syrup.",
        "Soak fried balls.",
        "Serve warm."
      ]
    },
    {
      dataCategory: "dessert",
      name: "Kheer",
      type: "Indian",
      cookTime: "40 minutes",
      calories: 390,
      img: "images/kheer.jpg",
      description: "Creamy rice pudding flavored with cardamom.",
      steps: [
        "Boil milk.",
        "Add rice.",
        "Cook until thick.",
        "Add sugar and cardamom.",
        "Serve chilled."
      ]
    },
  
    // ======================
    // FRENCH
    // ======================
  
    {
      dataCategory: "starter",
      name: "French Onion Soup",
      type: "French",
      cookTime: "45 minutes",
      calories: 310,
      img: "images/french-onion-soup.jpg",
      description: "Rich onion soup topped with melted cheese.",
      steps: [
        "Caramelize onions.",
        "Add broth.",
        "Simmer soup.",
        "Top with bread and cheese.",
        "Broil until melted."
      ]
    },
    {
      dataCategory: "starter",
      name: "Quiche Lorraine",
      type: "French",
      cookTime: "40 minutes",
      calories: 360,
      img: "images/quiche.jpg",
      description: "Savory tart with bacon and cheese.",
      steps: [
        "Prepare pie crust.",
        "Cook bacon.",
        "Mix egg filling.",
        "Bake until set.",
        "Cool slightly before serving."
      ]
    },
  
    {
      dataCategory: "main",
      name: "Coq au Vin",
      type: "French",
      cookTime: "1 hour 20 minutes",
      calories: 740,
      img: "images/coq-au-vin.jpg",
      description: "Chicken braised in red wine sauce.",
      steps: [
        "Brown chicken.",
        "Cook vegetables.",
        "Add wine and broth.",
        "Simmer until tender.",
        "Serve hot."
      ]
    },
    {
      dataCategory: "main",
      name: "Beef Bourguignon",
      type: "French",
      cookTime: "2 hours",
      calories: 810,
      img: "images/beef-bourguignon.jpg",
      description: "Slow-cooked beef stew with vegetables.",
      steps: [
        "Brown beef cubes.",
        "Cook vegetables.",
        "Add wine and broth.",
        "Slow cook until tender.",
        "Serve warm."
      ]
    },
  
    {
      dataCategory: "dessert",
      name: "Crème Brûlée",
      type: "French",
      cookTime: "50 minutes",
      calories: 480,
      img: "images/creme-brulee.jpg",
      description: "Vanilla custard with caramelized sugar top.",
      steps: [
        "Prepare custard.",
        "Bake in ramekins.",
        "Chill completely.",
        "Add sugar topping.",
        "Torch until caramelized."
      ]
    },
    {
      dataCategory: "dessert",
      name: "Macarons",
      type: "French",
      cookTime: "1 hour",
      calories: 370,
      img: "images/macarons.jpg",
      description: "Colorful sandwich cookies with cream filling.",
      steps: [
        "Prepare macaron batter.",
        "Pipe onto tray.",
        "Bake shells.",
        "Add filling.",
        "Sandwich together."
      ]
    }
  ];
  const main = document.querySelector(".recipes");
  const recipeForm = document.querySelector("#recipeForm");
  const searchInput = document.querySelector("#nameSearch");
  const caloriesInput = document.querySelector("#caloriesSearch");
  const cuisineInput = document.querySelector("#cuisine");
  
  const filters = document.querySelectorAll(".filter");
  
  let currentCategory = "all";

  const createBtn = document.querySelector(".btn.create");

createBtn.addEventListener("click", createPage);

function showRecipe(recipe) {
    main.classList.remove("recipes");
    main.classList.add("recipeDisplay");
  
    main.innerHTML = `
  <div class="recipe-view">

    <div class="recipe-image">
      <img src="${recipe.img}" alt="${recipe.name}">
    </div>

    <div class="recipe-info">

      <button class="back-btn">← Back</button>

      <h1>${recipe.name}</h1>

      <div class="recipe-meta">
        <p><strong>Cuisine:</strong> ${recipe.type}</p>
        <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
        <p><strong>Calories:</strong> ${recipe.calories}</p>
      </div>

      <div class="recipe-description">
        <h2>Description</h2>
        <p>${recipe.description}</p>
      </div>

      <div class="recipe-steps">
        <h2>Steps</h2>

        <ol>
          ${recipe.steps
            .map((step) => `<li>${step}</li>`)
            .join("")}
        </ol>
      </div>

    </div>

  </div>
`;
  
    document.querySelector(".back-btn").addEventListener("click", () => {
      main.classList.remove("recipeDisplay");
      main.classList.add("recipes");
  
      renderRecipes(recipies);
    });
  }
  
  // Render recipes
  function renderRecipes(list) {
    main.innerHTML = "";
  
    list.forEach((recipe) => {
      const card = document.createElement("div");
  
      card.classList.add("card");
  
      card.innerHTML = `
        <img src="${recipe.img}" alt="${recipe.name}">
  
        <h2>${recipe.name}</h2>
  
        <p class="cookTime">
          <strong>Cook Time:</strong> ${recipe.cookTime}
        </p>
  
        <p class="calories">
          <strong>Calories:</strong> ${recipe.calories}
        </p>
  
        <p class="type">
          <strong>Cuisine:</strong> ${recipe.type}
        </p>
  
        <p class="description">
          ${recipe.description}
        </p>
      `;
  
      const img = card.querySelector("img");
  
      // Remove broken images
      img.onerror = () => {
        img.remove();
        card.classList.add("no-image");
      };
      card.addEventListener("click", ()=>{showRecipe(recipe)})
      main.appendChild(card);
    });
  }
  
  // Filter recipes
  function filterRecipes() {
    const nameValue = searchInput.value.toLowerCase();
  
    const caloriesValue = caloriesInput.value;
  
    const cuisineValue = cuisineInput.value;
  
    const filtered = recipies.filter((recipe) => {
      const matchesName = recipe.name.toLowerCase().includes(nameValue);
  
      const matchesCalories =
        caloriesValue === "" || recipe.calories <= Number(caloriesValue);
  
      const matchesCuisine = cuisineValue === "" || recipe.type === cuisineValue;
  
      const matchesCategory =
        currentCategory === "all" || recipe.dataCategory === currentCategory;
  
      return matchesName && matchesCalories && matchesCuisine && matchesCategory;
    });
  
    renderRecipes(filtered);
  }

  function saveRecipes() {
    sessionStorage.setItem("recipies", JSON.stringify(recipies));
  }

  recipeForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const newRecipe = {
      dataCategory: document.querySelector("#recipeCategory").value,
      name: document.querySelector("#recipeName").value,
      type: document.querySelector("#recipeCuisine").value,
      cookTime: document.querySelector("#recipeCookTime").value,
      calories: Number(document.querySelector("#recipeCalories").value),
      img: document.querySelector("#recipeImage").value,
      description: document.querySelector("#recipeDescription").value,
      steps: document
        .querySelector("#recipeSteps")
        .value
        .split(",")
        .map(step => step.trim())
    };
  
    recipies.push(newRecipe);
  
    saveRecipes();          // ✅ SAVE HERE
  
    renderRecipes(recipies);
  
    recipeForm.reset();
  
    createPage();
  });
  
  // Category buttons
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((btn) => btn.classList.remove("active"));
  
      button.classList.add("active");
  
      currentCategory = button.dataset.category;
  
      filterRecipes();
    });
  });
  
  // Input filters
  searchInput.addEventListener("input", filterRecipes);
  
  caloriesInput.addEventListener("input", filterRecipes);
  
  cuisineInput.addEventListener("change", filterRecipes);
  
  // Initial render
  renderRecipes(recipies);
  
  const createPageDiv = document.querySelector(".createPage");
  
  function createPage() {
    createPageDiv.classList.toggle("active");
  }
