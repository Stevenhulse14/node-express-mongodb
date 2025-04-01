import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  //function setMeals that allows to change meals
  //function setMeals that allows to change meals
  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetch("http://localhost:8080/api/meals/2025-04-01");

        const response = await data.json();

        setMeals(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMeals();
  }, []);

  console.log(meals);

  return (
    <div>
      <h1>id: {meals?._id}</h1>
      <p>Welcome to the Meal Tracker app!</p>
      <p>This is a simple application to track your meals.</p>
      <p>You can add, edit, and delete meals.</p>
      <p>Enjoy!</p>
      <p>To get started, please log in or sign up.</p>
      <h2>Breakfest</h2>
      <ul>
        <li>{meals?.breakfest?.food}</li>
      </ul>
      <h2>Lunch</h2>
      <ul>
        <li>{meals?.lunch?.food}</li>
      </ul>
      <h2>Dinner</h2>
      <ul>
        <li>{meals?.dinner?.food}</li>
      </ul>
    </div>
  );
}

export default App;
