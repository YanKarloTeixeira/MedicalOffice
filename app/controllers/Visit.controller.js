var VisitModel = require('../models/Visit.model.js');

/**
 * VisitController.js
 *
 * @description :: Server-side logic for managing Visits.
 */
module.exports = {

    /**
     * VisitController.list()
     */
    list: function (req, res) {
        VisitModel.find(function (err, Visits) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Visit.',
                    error: err
                });
            }
            return res.json(Visits);
        });
    },

    /**
     * VisitController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        VisitModel.findOne({ _id: id }, function (err, Visit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Visit.',
                    error: err
                });
            }
            if (!Visit) {
                return res.status(404).json({
                    message: 'No such Visit'
                });
            }
            return res.json(Visit);
        });
    },

    /**
     * VisitController.create()
     */
    create: function (req, res) {
        var Visit = new VisitModel({
            date: req.body.date,
            professional: req.body.professional,
            patient: req.body.patient

        });

        Visit.save(function (err, Visit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Visit',
                    error: err
                });
            }
            return res.status(201).json(Visit);
        });
    },

    /**
     * VisitController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        VisitModel.findOne({ _id: id }, function (err, Visit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Visit',
                    error: err
                });
            }
            if (!Visit) {
                return res.status(404).json({
                    message: 'No such Visit'
                });
            }

            Visit.date = req.body.date ? req.body.date : Visit.date;
            Visit.professional = req.body.professional ? req.body.professional : Visit.professional;
            Visit.patient = req.body.patient ? req.body.patient : Visit.patient;

            Visit.save(function (err, Visit) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Visit.',
                        error: err
                    });
                }

                return res.json(Visit);
            });
        });
    },

    /**
     * VisitController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        VisitModel.findByIdAndRemove(id, function (err, Visit) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Visit.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
