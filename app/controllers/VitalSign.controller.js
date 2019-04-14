var VitalSignModel = require('../models/VitalSign.model.js');

/**
 * VitalSignController.js
 *
 * @description :: Server-side logic for managing VitalSigns.
 */
module.exports = {

    /**
     * VitalSignController.list()
     */
    list: function (req, res) {
        VitalSignModel.find(function (err, VitalSigns) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting VitalSign.',
                    error: err
                });
            }
            return res.json(VitalSigns);
        });
    },

    /**
     * VitalSignController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        VitalSignModel.findOne({ _id: id }, function (err, VitalSign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting VitalSign.',
                    error: err
                });
            }
            if (!VitalSign) {
                return res.status(404).json({
                    message: 'No such VitalSign'
                });
            }
            return res.json(VitalSign);
        });
    },

    /**
     * VitalSignController.create()
     */
    create: function (req, res) {
        var VitalSign = new VitalSignModel({
            VitalSignName: req.body.VitalSignName

        });

        VitalSign.save(function (err, VitalSign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating VitalSign',
                    error: err
                });
            }
            return res.status(201).json(VitalSign);
        });
    },

    /**
     * VitalSignController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        VitalSignModel.findOne({ _id: id }, function (err, VitalSign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting VitalSign',
                    error: err
                });
            }
            if (!VitalSign) {
                return res.status(404).json({
                    message: 'No such VitalSign'
                });
            }

            VitalSign.VitalSignName = req.body.VitalSignName ? req.body.VitalSignName : VitalSign.VitalSignName;

            VitalSign.save(function (err, VitalSign) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating VitalSign.',
                        error: err
                    });
                }

                return res.json(VitalSign);
            });
        });
    },

    /**
     * VitalSignController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        VitalSignModel.findByIdAndRemove(id, function (err, VitalSign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the VitalSign.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
