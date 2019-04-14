var PatientTipModel = require('../models/PatientTip.model.js');

/**
 * PatientTipController.js
 *
 * @description :: Server-side logic for managing PatientTips.
 */
module.exports = {

    /**
     * PatientTipController.list()
     */
    list: function (req, res) {
        PatientTipModel.find(function (err, PatientTips) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PatientTip.',
                    error: err
                });
            }
            return res.json(PatientTips);
        });
    },

    /**
     * PatientTipController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PatientTipModel.findOne({ _id: id }, function (err, PatientTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PatientTip.',
                    error: err
                });
            }
            if (!PatientTip) {
                return res.status(404).json({
                    message: 'No such PatientTip'
                });
            }
            return res.json(PatientTip);
        });
    },

    /**
     * PatientTipController.create()
     */
    create: function (req, res) {
        var PatientTip = new PatientTipModel({
            media: req.body.media,
            patient: req.body.patient

        });

        PatientTip.save(function (err, PatientTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating PatientTip',
                    error: err
                });
            }
            return res.status(201).json(PatientTip);
        });
    },

    /**
     * PatientTipController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        PatientTipModel.findOne({ _id: id }, function (err, PatientTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PatientTip',
                    error: err
                });
            }
            if (!PatientTip) {
                return res.status(404).json({
                    message: 'No such PatientTip'
                });
            }

            PatientTip.media = req.body.media ? req.body.media : PatientTip.media;
            PatientTip.patient = req.body.patient ? req.body.patient : PatientTip.patient;

            PatientTip.save(function (err, PatientTip) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating PatientTip.',
                        error: err
                    });
                }

                return res.json(PatientTip);
            });
        });
    },

    /**
     * PatientTipController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        PatientTipModel.findByIdAndRemove(id, function (err, PatientTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the PatientTip.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
