var express = require('express');
var router = express.Router();
var PatientTipController = require('../controllers/PatientTipController.js');

/*
 * GET
 */
router.get('/', PatientTipController.list);

/*
 * GET
 */
router.get('/:id', PatientTipController.show);

/*
 * POST
 */
router.post('/', PatientTipController.create);

/*
 * PUT
 */
router.put('/:id', PatientTipController.update);

/*
 * DELETE
 */
router.delete('/:id', PatientTipController.remove);

module.exports = router;
