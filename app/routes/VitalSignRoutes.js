var express = require('express');
var router = express.Router();
var VitalSignController = require('../controllers/VitalSignController.js');

/*
 * GET
 */
router.get('/', VitalSignController.list);

/*
 * GET
 */
router.get('/:id', VitalSignController.show);

/*
 * POST
 */
router.post('/', VitalSignController.create);

/*
 * PUT
 */
router.put('/:id', VitalSignController.update);

/*
 * DELETE
 */
router.delete('/:id', VitalSignController.remove);

module.exports = router;
