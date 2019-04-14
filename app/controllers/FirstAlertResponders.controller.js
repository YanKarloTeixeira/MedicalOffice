var FirstAlertRespondersModel = require('../models/FirstAlertResponders.model.js');

/**
 * FirstAlertRespondersController.js
 *
 * @description :: Server-side logic for managing FirstAlertResponderss.
 */
module.exports = {

    /**
     * FirstAlertRespondersController.list()
     */
    list: function (req, res) {
        FirstAlertRespondersModel.find(function (err, FirstAlertResponderss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting FirstAlertResponders.',
                    error: err
                });
            }
            return res.json(FirstAlertResponderss);
        });
    },

    /**
     * FirstAlertRespondersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        FirstAlertRespondersModel.findOne({_id: id}, function (err, FirstAlertResponders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting FirstAlertResponders.',
                    error: err
                });
            }
            if (!FirstAlertResponders) {
                return res.status(404).json({
                    message: 'No such FirstAlertResponders'
                });
            }
            return res.json(FirstAlertResponders);
        });
    },

    /**
     * FirstAlertRespondersController.create()
     */
    create: function (req, res) {
        var FirstAlertResponders = new FirstAlertRespondersModel({
			patient : req.body.patient,
			responderEmail : req.body.responderEmail,
			responderPhone : req.body.responderPhone,
			responderName : req.body.responderName

        });

        FirstAlertResponders.save(function (err, FirstAlertResponders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating FirstAlertResponders',
                    error: err
                });
            }
            return res.status(201).json(FirstAlertResponders);
        });
    },

    /**
     * FirstAlertRespondersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        FirstAlertRespondersModel.findOne({_id: id}, function (err, FirstAlertResponders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting FirstAlertResponders',
                    error: err
                });
            }
            if (!FirstAlertResponders) {
                return res.status(404).json({
                    message: 'No such FirstAlertResponders'
                });
            }

            FirstAlertResponders.patient = req.body.patient ? req.body.patient : FirstAlertResponders.patient;
			FirstAlertResponders.responderEmail = req.body.responderEmail ? req.body.responderEmail : FirstAlertResponders.responderEmail;
			FirstAlertResponders.responderPhone = req.body.responderPhone ? req.body.responderPhone : FirstAlertResponders.responderPhone;
			FirstAlertResponders.responderName = req.body.responderName ? req.body.responderName : FirstAlertResponders.responderName;
			
            FirstAlertResponders.save(function (err, FirstAlertResponders) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating FirstAlertResponders.',
                        error: err
                    });
                }

                return res.json(FirstAlertResponders);
            });
        });
    },

    /**
     * FirstAlertRespondersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        FirstAlertRespondersModel.findByIdAndRemove(id, function (err, FirstAlertResponders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the FirstAlertResponders.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
