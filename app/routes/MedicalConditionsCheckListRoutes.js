var express = require('express');
var router = express.Router();
var MedicalConditionsCheckListController = require('../controllers/MedicalConditionsCheckListController.js');

/*
 * GET
 */
router.get('/', MedicalConditionsCheckListController.list);

/*
 * GET
 */
router.get('/:id', MedicalConditionsCheckListController.show);

/*
 * POST
 */
router.post('/', MedicalConditionsCheckListController.create);

/*
 * PUT
 */
router.put('/:id', MedicalConditionsCheckListController.update);

/*
 * DELETE
 */
router.delete('/:id', MedicalConditionsCheckListController.remove);

module.exports = router;
