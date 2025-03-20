const router = require("express").Router();
const data = require("../../data/printer-data");
// import my crud controller
const crudController = require("../../controller/crudController");

const { getAll, create, update, remove } = crudController(data);

// localhost:8080/api/printer
router.get("/", getAll);

router.post("/", create);

// localhost:8080/api/printer/:id
router.put("/:id", update);

router.delete("/:id", remove);
module.exports = router;
