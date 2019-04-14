var MedicalConditionTipModel = require('../models/MedicalConditionTip.model.js');

/**
 * MedicalConditionTipController.js
 *
 * @description :: Server-side logic for managing MedicalConditionTips.
 */
module.exports = {

    /**
     * MedicalConditionTipController.list()
     */
    list: function (req, res) {
        MedicalConditionTipModel.find(function (err, MedicalConditionTips) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditionTip.',
                    error: err
                });
            }
            return res.json(MedicalConditionTips);
        });
    },

    /**
     * MedicalConditionTipController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        MedicalConditionTipModel.findOne({ _id: id }, function (err, MedicalConditionTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditionTip.',
                    error: err
                });
            }
            if (!MedicalConditionTip) {
                return res.status(404).json({
                    message: 'No such MedicalConditionTip'
                });
            }
            return res.json(MedicalConditionTip);
        });
    },

    /**
     * MedicalConditionTipController.create()
     */
    create: function (req, res) {
        var MedicalConditionTip = new MedicalConditionTipModel({
            media: req.body.media,
            medicalCondition: req.body.medicalCondition

        });

        MedicalConditionTip.save(function (err, MedicalConditionTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating MedicalConditionTip',
                    error: err
                });
            }
            return res.status(201).json(MedicalConditionTip);
        });
    },

    /**
     * MedicalConditionTipController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        MedicalConditionTipModel.findOne({ _id: id }, function (err, MedicalConditionTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditionTip',
                    error: err
                });
            }
            if (!MedicalConditionTip) {
                return res.status(404).json({
                    message: 'No such MedicalConditionTip'
                });
            }

            MedicalConditionTip.media = req.body.media ? req.body.media : MedicalConditionTip.media;
            MedicalConditionTip.medicalCondition = req.body.medicalCondition ? req.body.medicalCondition : MedicalConditionTip.medicalCondition;

            MedicalConditionTip.save(function (err, MedicalConditionTip) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating MedicalConditionTip.',
                        error: err
                    });
                }

                return res.json(MedicalConditionTip);
            });
        });
    },

    /**
     * MedicalConditionTipController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        MedicalConditionTipModel.findByIdAndRemove(id, function (err, MedicalConditionTip) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the MedicalConditionTip.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
