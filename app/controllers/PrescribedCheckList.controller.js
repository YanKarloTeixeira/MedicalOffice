var PrescribedCheckListModel = require('../models/PrescribedCheckList.model.js');

/**
 * PrescribedCheckListController.js
 *
 * @description :: Server-side logic for managing PrescribedCheckLists.
 */
module.exports = {

    /**
     * PrescribedCheckListController.list()
     */
    list: function (req, res) {
        PrescribedCheckListModel.find(function (err, PrescribedCheckLists) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PrescribedCheckList.',
                    error: err
                });
            }
            return res.json(PrescribedCheckLists);
        });
    },

    /**
     * PrescribedCheckListController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PrescribedCheckListModel.findOne({ _id: id }, function (err, PrescribedCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PrescribedCheckList.',
                    error: err
                });
            }
            if (!PrescribedCheckList) {
                return res.status(404).json({
                    message: 'No such PrescribedCheckList'
                });
            }
            return res.json(PrescribedCheckList);
        });
    },

    /**
     * PrescribedCheckListController.create()
     */
    create: function (req, res) {
        var PrescribedCheckList = new PrescribedCheckListModel({
            professional: req.body.professional,
            patient: req.body.patient,
            vitalSign: req.body.vitalSign

        });

        PrescribedCheckList.save(function (err, PrescribedCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating PrescribedCheckList',
                    error: err
                });
            }
            return res.status(201).json(PrescribedCheckList);
        });
    },

    /**
     * PrescribedCheckListController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        PrescribedCheckListModel.findOne({ _id: id }, function (err, PrescribedCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PrescribedCheckList',
                    error: err
                });
            }
            if (!PrescribedCheckList) {
                return res.status(404).json({
                    message: 'No such PrescribedCheckList'
                });
            }

            PrescribedCheckList.professional = req.body.professional ? req.body.professional : PrescribedCheckList.professional;
            PrescribedCheckList.patient = req.body.patient ? req.body.patient : PrescribedCheckList.patient;
            PrescribedCheckList.vitalSign = req.body.vitalSign ? req.body.vitalSign : PrescribedCheckList.vitalSign;

            PrescribedCheckList.save(function (err, PrescribedCheckList) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating PrescribedCheckList.',
                        error: err
                    });
                }

                return res.json(PrescribedCheckList);
            });
        });
    },

    /**
     * PrescribedCheckListController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        PrescribedCheckListModel.findByIdAndRemove(id, function (err, PrescribedCheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the PrescribedCheckList.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
