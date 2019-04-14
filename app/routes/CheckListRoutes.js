var express = require('express');
var router = express.Router();
var CheckListController = require('../controllers/CheckListController.js');

/*
 * GET
 */
router.get('/', CheckListController.list);

/*
 * GET
 */
router.get('/:id', CheckListController.show);

/*
 * POST
 */
router.post('/', CheckListController.create);

/*
 * PUT
 */
router.put('/:id', CheckListController.update);

/*
 * DELETE
 */
router.delete('/:id', CheckListController.remove);

module.exports = router;
