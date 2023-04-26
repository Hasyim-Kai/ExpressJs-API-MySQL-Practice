const express         = require('express');
const router          = express.Router();
const tutorialRoutes  = require("./tutorial.routes")

// router.get('/', homepageController);
router.use('/tutorials', tutorialRoutes);


module.exports = router;