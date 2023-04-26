"use strict";
const animal_1 = require("../controllers/animal");
const router = require('express').Router();
router.get('/animal', animal_1.getAllAnimals)
    .post('/animal', animal_1.createAnimal);
router.get('/animal/:id', animal_1.getAnimal)
    .put('/animal/:id', animal_1.updateAnimal)
    .delete('/animal/:id', animal_1.delAnimal);
module.exports = router;
//# sourceMappingURL=index.js.map