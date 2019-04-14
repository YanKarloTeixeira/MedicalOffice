var MedicalConditionsCheckListModel = require('../models/MedicalConditionsCheckList.model.js');

/**
 * MedicalConditionsCheckListController.js
 *
 * @description :: Server-side logic for managing MedicalConditionsCheckLists.
 */
module.exports = {

    /**
     * MedicalConditionsCheckListController.list()
     */
    list: function (req, res) {
        MedicalConditionsCheckListModel.find(function (err, MedicalConditionsCheckLists) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditionsCheckList.',
                    error: err
                });
            }
            return res.json(MedicalConditionsCheckLists);
        });
    },

    /**
     * MedicalConditionsCheckListController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        MedicalConditionsCheckListModel.findOne({ _id: id }, function (err, MedicalConditionsCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditionsCheckList.',
                    error: err
                });
            }
            if (!MedicalConditionsCheckList) {
                return res.status(404).json({
                    message: 'No such MedicalConditionsCheckList'
                });
            }
            return res.json(MedicalConditionsCheckList);
        });
    },

    /**
     * MedicalConditionsCheckListController.create()
     */
    create: function (req, res) {
        var MedicalConditionsCheckList = new MedicalConditionsCheckListModel({
            medicalCondition: req.body.medicalCondition,
            vitalSign: req.body.vitalSign,
            logicalOperator: req.body.logicalOperator,
            value: req.body.value

        });

        MedicalConditionsCheckList.save(function (err, MedicalConditionsCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating MedicalConditionsCheckList',
                    error: err
                });
            }
            return res.status(201).json(MedicalConditionsCheckList);
        });
    },

    /**
     * MedicalConditionsCheckListController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        MedicalConditionsCheckListModel.findOne({ _id: id }, function (err, MedicalConditionsCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalConditionsCheckList',
                    error: err
                });
            }
            if (!MedicalConditionsCheckList) {
                return res.status(404).json({
                    message: 'No such MedicalConditionsCheckList'
                });
            }

            MedicalConditionsCheckList.medicalCondition = req.body.medicalCondition ? req.body.medicalCondition : MedicalConditionsCheckList.medicalCondition;
            MedicalConditionsCheckList.vitalSign = req.body.vitalSign ? req.body.vitalSign : MedicalConditionsCheckList.vitalSign;
            MedicalConditionsCheckList.logicalOperator = req.body.logicalOperator ? req.body.logicalOperator : MedicalConditionsCheckList.logicalOperator;
            MedicalConditionsCheckList.value = req.body.value ? req.body.value : MedicalConditionsCheckList.value;

            MedicalConditionsCheckList.save(function (err, MedicalConditionsCheckList) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating MedicalConditionsCheckList.',
                        error: err
                    });
                }

                return res.json(MedicalConditionsCheckList);
            });
        });
    },

    /**
     * MedicalConditionsCheckListController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        MedicalConditionsCheckListModel.findByIdAndRemove(id, function (err, MedicalConditionsCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the MedicalConditionsCheckList.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
