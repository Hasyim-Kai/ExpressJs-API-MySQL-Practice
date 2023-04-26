import tutorials from "../controllers/tutorial.controller";
const router = require("express").Router();

// Retrieve all Tutorials
router.get("/", tutorials.findAll)

// Create a new Tutorial
.post("/", tutorials.create)

// Delete all Tutorials
.delete("/", tutorials.deleteAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne)

// Update a Tutorial with id
.put("/:id", tutorials.update)

// Delete a Tutorial with id
.delete("/:id", tutorials.del);

export = router;