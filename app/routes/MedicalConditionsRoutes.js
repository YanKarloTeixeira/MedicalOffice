var express = require('express');
var router = express.Router();
var MedicalConditionsController = require('../controllers/MedicalConditionsController.js');

/*
 * GET
 */
router.get('/', MedicalConditionsController.list);

/*
 * GET
 */
router.get('/:id', MedicalConditionsController.show);

/*
 * POST
 */
router.post('/', MedicalConditionsController.create);

/*
 * PUT
 */
router.put('/:id', MedicalConditionsController.update);

/*
 * DELETE
 */
router.delete('/:id', MedicalConditionsController.remove);

module.exports = router;
