const Router = require("express").Router();
const meal_planner = require("../../models/meal_planner");
const Mealplan = require("../../models/meal_planner");
const {
  createPlan,
  getPlanByDate,
  getPlans,
  updatePlan,
  deletePlan,
  getMealByType,
} = require("../controller/meals-controller");

// localhost:8080/api/meals
//get
Router.get("/", getPlans);

//get plan by date

Router.get("/:date", getPlanByDate);

//get meals by type
Router.get("/option/:mealType", getMealByType);
//post : create
Router.post("/", createPlan);

//put : update
Router.put("/:date", updatePlan);

//delete : destroy
Router.delete("/:date", deletePlan);

module.exports = Router;
