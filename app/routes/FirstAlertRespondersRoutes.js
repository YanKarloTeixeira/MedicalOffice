var express = require('express');
var router = express.Router();
var FirstAlertRespondersController = require('../controllers/FirstAlertRespondersController.js');

/*
 * GET
 */
router.get('/', FirstAlertRespondersController.list);

/*
 * GET
 */
router.get('/:id', FirstAlertRespondersController.show);

/*
 * POST
 */
router.post('/', FirstAlertRespondersController.create);

/*
 * PUT
 */
router.put('/:id', FirstAlertRespondersController.update);

/*
 * DELETE
 */
router.delete('/:id', FirstAlertRespondersController.remove);

module.exports = router;
