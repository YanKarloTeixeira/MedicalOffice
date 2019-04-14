var express = require('express');
var router = express.Router();
var MediaController = require('../controllers/MediaController.js');

/*
 * GET
 */
router.get('/', MediaController.list);

/*
 * GET
 */
router.get('/:id', MediaController.show);

/*
 * POST
 */
router.post('/', MediaController.create);

/*
 * PUT
 */
router.put('/:id', MediaController.update);

/*
 * DELETE
 */
router.delete('/:id', MediaController.remove);

module.exports = router;
