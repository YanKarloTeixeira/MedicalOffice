var express = require('express');
var router = express.Router();
var PrescribedCheckListController = require('../controllers/PrescribedCheckListController.js');

/*
 * GET
 */
router.get('/', PrescribedCheckListController.list);

/*
 * GET
 */
router.get('/:id', PrescribedCheckListController.show);

/*
 * POST
 */
router.post('/', PrescribedCheckListController.create);

/*
 * PUT
 */
router.put('/:id', PrescribedCheckListController.update);

/*
 * DELETE
 */
router.delete('/:id', PrescribedCheckListController.remove);

module.exports = router;
