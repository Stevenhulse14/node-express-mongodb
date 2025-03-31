const Mealplan = require("../../models/meal_planner");

module.exports = {
  createPlan: async (req, res) => {
    const data = req.body;
    try {
      const newMealPlan = new Mealplan(data);
      await newMealPlan.save();
      res.status(201).json(newMealPlan);
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  },
  getPlans: async (req, res) => {
    try {
      const mealPlan = await Mealplan.find();
      res.json(mealPlan);
    } catch (error) {
      // res.status(400).json({ error: err.message})
      console.error(error);
    }
  },
  getPlanByDate: async (req, res) => {
    const { date } = req.params;
    try {
      const plan = await Mealplan.findOne({
        date: date,
      });
      if (!plan)
        return res.status(404).json({
          message: "plan not found",
        });

      res.json(plan);
    } catch (error) {
      console.error({
        message: error.message,
      });
    }
  },
  getMealByType: async (req, res) => {
    const { mealType } = req.params;

    try {
      const meals = await Mealplan.find().select(mealType);
      res.json(meals);
    } catch (error) {
      console.error({
        message: error.message,
      });
    }
  },
  updatePlan: async (req, res) => {
    const data = req.body;
    const { date } = req.params;
    try {
      const plan = await Mealplan.findOneAndUpdate(
        {
          date: date,
        },
        data,
        { new: true }
      );
      if (!plan) {
        return res.status(404).json({
          message: "Plan not found",
        });
      }
      res.status(200).json(plan);
    } catch (error) {
      res.status(400).json({
        error: err.message,
      });
    }
  },
  deletePlan: async (req, res) => {
    const { date } = req.params;
    try {
      const result = await Mealplan.findOneAndDelete({
        date: date,
      });
      if (!result) return res.status(404).json({ message: "Plan not found" });

      res.json({
        message: "plan deleted",
      });
    } catch (error) {
      console.error({
        message: error.message,
      });
    }
  },
};
