var express = require('express');
var router = express.Router();
var VisitController = require('../controllers/VisitController.js');

/*
 * GET
 */
router.get('/', VisitController.list);

/*
 * GET
 */
router.get('/:id', VisitController.show);

/*
 * POST
 */
router.post('/', VisitController.create);

/*
 * PUT
 */
router.put('/:id', VisitController.update);

/*
 * DELETE
 */
router.delete('/:id', VisitController.remove);

module.exports = router;
