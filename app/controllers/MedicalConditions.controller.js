var MedicalConditionsModel = require('../models/MedicalConditions.model.js');

/**
 * MedicalConditionsController.js
 *
 * @description :: Server-side logic for managing MedicalConditionss.
 */
module.exports = {

    /**
     * MedicalConditionsController.list()
     */
    list: function (req, res) {
        MedicalConditionsModel.find(function (err, MedicalConditionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditions.',
                    error: err
                });
            }
            return res.json(MedicalConditionss);
        });
    },

    /**
     * MedicalConditionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        MedicalConditionsModel.findOne({ _id: id }, function (err, MedicalConditions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditions.',
                    error: err
                });
            }
            if (!MedicalConditions) {
                return res.status(404).json({
                    message: 'No such MedicalConditions'
                });
            }
            return res.json(MedicalConditions);
        });
    },

    /**
     * MedicalConditionsController.create()
     */
    create: function (req, res) {
        var MedicalConditions = new MedicalConditionsModel({
            Name: req.body.Name,
            description: req.body.description

        });

        MedicalConditions.save(function (err, MedicalConditions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating MedicalConditions',
                    error: err
                });
            }
            return res.status(201).json(MedicalConditions);
        });
    },

    /**
     * MedicalConditionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        MedicalConditionsModel.findOne({ _id: id }, function (err, MedicalConditions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditions',
                    error: err
                });
            }
            if (!MedicalConditions) {
                return res.status(404).json({
                    message: 'No such MedicalConditions'
                });
            }

            MedicalConditions.Name = req.body.Name ? req.body.Name : MedicalConditions.Name;
            MedicalConditions.description = req.body.description ? req.body.description : MedicalConditions.description;

            MedicalConditions.save(function (err, MedicalConditions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating MedicalConditions.',
                        error: err
                    });
                }

                return res.json(MedicalConditions);
            });
        });
    },

    /**
     * MedicalConditionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        MedicalConditionsModel.findByIdAndRemove(id, function (err, MedicalConditions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the MedicalConditions.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
