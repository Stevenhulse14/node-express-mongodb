// This is where our crud activities is going and each route that need
// to use those crud activities will just import them from this file.
// arrow functions return implicity
const crudController = (data) => ({
  getAll: (req, res) => {
    res.json(data);
  },

  create: (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json({
      message: "Successfully added to database",
      data,
    });
  },

  update: (req, res) => {
    const id = +req.params.id;
    const payload = req.body;

    const index = data.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: " Item doesn't exist",
      });
    }
    data[index] = { ...data[index], ...payload };
    res.status(200).json({
      message: " Item successfully updated",
      data,
    });
  },

  remove: (req, res) => {
    const id = +req.params.id;

    const index = data.findIndex((item) => item.id === id);
    console.log(typeof id, index, data);
    if (index === -1) {
      return res.status(404).json({ message: "Item doesn't exist." });
    }

    const deletedItem = data.splice(index, 1);

    res.status(200).json({
      message: " Item successfully deleted ",
      data,
      deletedItem,
    });
  },
});

/// *ink & *printer route(data)=> call our crudcontroller(data)

module.exports = crudController;
