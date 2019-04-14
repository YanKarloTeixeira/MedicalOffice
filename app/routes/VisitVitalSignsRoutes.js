var express = require('express');
var router = express.Router();
var VisitVitalSignsController = require('../controllers/VisitVitalSignsController.js');

/*
 * GET
 */
router.get('/', VisitVitalSignsController.list);

/*
 * GET
 */
router.get('/:id', VisitVitalSignsController.show);

/*
 * POST
 */
router.post('/', VisitVitalSignsController.create);

/*
 * PUT
 */
router.put('/:id', VisitVitalSignsController.update);

/*
 * DELETE
 */
router.delete('/:id', VisitVitalSignsController.remove);

module.exports = router;
