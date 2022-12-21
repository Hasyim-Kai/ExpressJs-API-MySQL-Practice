import { createAnimal, delAnimal, getAllAnimals, getAnimal, updateAnimal } from "../controller/animal";
const router = require('express').Router()

router.get('/animal', getAllAnimals)
  .post('/animal', createAnimal)
router.get('/animal/:id', getAnimal)
  .put('/animal/:id', updateAnimal)
  .delete('/animal/:id', delAnimal)

export = router;