var MediaModel = require('../models/Media.model.js');

/**
 * MediaController.js
 *
 * @description :: Server-side logic for managing Medias.
 */
module.exports = {

    /**
     * MediaController.list()
     */
    list: function (req, res) {
        MediaModel.find(function (err, Medias) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Media.',
                    error: err
                });
            }
            return res.json(Medias);
        });
    },

    /**
     * MediaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        MediaModel.findOne({ _id: id }, function (err, Media) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Media.',
                    error: err
                });
            }
            if (!Media) {
                return res.status(404).json({
                    message: 'No such Media'
                });
            }
            return res.json(Media);
        });
    },

    /**
     * MediaController.create()
     */
    create: function (req, res) {
        var Media = new MediaModel({
            medicalCondition: req.body.medicalCondition,
            title: req.body.title,
            url: req.body.url,
            briefing: req.body.briefing,
            mediaType: req.body.mediaType

        });

        Media.save(function (err, Media) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Media',
                    error: err
                });
            }
            return res.status(201).json(Media);
        });
    },

    /**
     * MediaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        MediaModel.findOne({ _id: id }, function (err, Media) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Media',
                    error: err
                });
            }
            if (!Media) {
                return res.status(404).json({
                    message: 'No such Media'
                });
            }

            Media.medicalCondition = req.body.medicalCondition ? req.body.medicalCondition : Media.medicalCondition;
            Media.title = req.body.title ? req.body.title : Media.title;
            Media.url = req.body.url ? req.body.url : Media.url;
            Media.briefing = req.body.briefing ? req.body.briefing : Media.briefing;
            Media.mediaType = req.body.mediaType ? req.body.mediaType : Media.mediaType;

            Media.save(function (err, Media) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Media.',
                        error: err
                    });
                }

                return res.json(Media);
            });
        });
    },

    /**
     * MediaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        MediaModel.findByIdAndRemove(id, function (err, Media) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Media.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
