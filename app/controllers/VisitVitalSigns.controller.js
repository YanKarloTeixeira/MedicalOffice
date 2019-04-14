var VisitVitalSignsModel = require('../models/VisitVitalSigns.model.js');

/**
 * VisitVitalSignsController.js
 *
 * @description :: Server-side logic for managing VisitVitalSignss.
 */
module.exports = {

    /**
     * VisitVitalSignsController.list()
     */
    list: function (req, res) {
        VisitVitalSignsModel.find(function (err, VisitVitalSignss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting VisitVitalSigns.',
                    error: err
                });
            }
            return res.json(VisitVitalSignss);
        });
    },

    /**
     * VisitVitalSignsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        VisitVitalSignsModel.findOne({ _id: id }, function (err, VisitVitalSigns) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting VisitVitalSigns.',
                    error: err
                });
            }
            if (!VisitVitalSigns) {
                return res.status(404).json({
                    message: 'No such VisitVitalSigns'
                });
            }
            return res.json(VisitVitalSigns);
        });
    },

    /**
     * VisitVitalSignsController.create()
     */
    create: function (req, res) {
        var VisitVitalSigns = new VisitVitalSignsModel({
            Visit: req.body.Visit,
            vitalSign: req.body.vitalSign,
            value: req.body.value

        });

        VisitVitalSigns.save(function (err, VisitVitalSigns) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating VisitVitalSigns',
                    error: err
                });
            }
            return res.status(201).json(VisitVitalSigns);
        });
    },

    /**
     * VisitVitalSignsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        VisitVitalSignsModel.findOne({ _id: id }, function (err, VisitVitalSigns) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting VisitVitalSigns',
                    error: err
                });
            }
            if (!VisitVitalSigns) {
                return res.status(404).json({
                    message: 'No such VisitVitalSigns'
                });
            }

            VisitVitalSigns.Visit = req.body.Visit ? req.body.Visit : VisitVitalSigns.Visit;
            VisitVitalSigns.vitalSign = req.body.vitalSign ? req.body.vitalSign : VisitVitalSigns.vitalSign;
            VisitVitalSigns.value = req.body.value ? req.body.value : VisitVitalSigns.value;

            VisitVitalSigns.save(function (err, VisitVitalSigns) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating VisitVitalSigns.',
                        error: err
                    });
                }

                return res.json(VisitVitalSigns);
            });
        });
    },

    /**
     * VisitVitalSignsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        VisitVitalSignsModel.findByIdAndRemove(id, function (err, VisitVitalSigns) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the VisitVitalSigns.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
