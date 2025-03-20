const router = require("express").Router();
let data = require("../../data/musicians-data");

const { v4: uuid } = require("uuid");

// "localhost:8080/api/musicians" Get request
router.get("/", (req, res) => {
  res.json(data);
});

// "localhost:8080/api/musicians" post request
router.post("/", (req, res) => {
  // post requests have a body
  const mergeIdandData = { ...req.body, id: uuid() };

  if (data.find((item) => item.id === mergeIdandData.id)) {
    return res.status(500).json({
      error: " Bad request item exists already",
    });
  } else {
    data.push(mergeIdandData);
    return res.status(201).json({
      message: " successfully added to Database !",
      data,
    });
  }
});

// updating

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newdata = req.body;

  if (data.find((item) => item.id === id)) {
    // loop over that data array and filter out anything that doesnt have that id.

    /**
   [
    {id:1}
    {id:2}
    {id:3}  
   ] => filter out anything that has *3 => [ {id:1}, {id:2}] + { new piece of data } = > {...old-data, new-data}
   */

    const newarr = data.filter((item) => item.id !== id);

    newarr.push(newdata);

    data = [...newarr];

    res.status(202).json({
      message: " created new item ",
      data,
    });
  } else {
    res.status(500).json({
      message: " Item doesn't exist ",
    });
  }
});

// PATCH Route: Update musician partially by ID
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;

  const itemIndex = data.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({
      message: "Item doesn't exist",
    });
  }

  // Merge existing data with updated fields
  data[itemIndex] = { ...data[itemIndex], ...updateFields };

  return res.status(200).json({
    message: "Item successfully updated",
    data: data[itemIndex],
  });
});

// DELETE Route: Delete musician by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (!data.find((item) => item.id === id)) {
    return res.status(404).json({
      message: "Item doesn't exist",
    });
  }

  data = data.filter((item) => item.id !== id);

  return res.status(200).json({
    message: "Item successfully deleted",
    data,
  });
});

module.exports = router;
