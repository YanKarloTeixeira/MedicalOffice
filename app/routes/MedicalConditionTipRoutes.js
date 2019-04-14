var express = require('express');
var router = express.Router();
var MedicalConditionTipController = require('../controllers/MedicalConditionTipController.js');

/*
 * GET
 */
router.get('/', MedicalConditionTipController.list);

/*
 * GET
 */
router.get('/:id', MedicalConditionTipController.show);

/*
 * POST
 */
router.post('/', MedicalConditionTipController.create);

/*
 * PUT
 */
router.put('/:id', MedicalConditionTipController.update);

/*
 * DELETE
 */
router.delete('/:id', MedicalConditionTipController.remove);

module.exports = router;
