const router = require("express").Router();
const data = require("../../data/ink-data");
// import my crud controller
const crudController = require("../../controller/crudController");

const { getAll, create, update, remove } = crudController(data);
// localhost:8080/api/ink
router.get("/", getAll);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", remove);
module.exports = router;
