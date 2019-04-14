var CheckListModel = require('../models/CheckList.model.js');

/**
 * CheckListController.js
 *
 * @description :: Server-side logic for managing CheckLists.
 */
module.exports = {

    /**
     * CheckListController.list()
     */
    list: function (req, res) {
        CheckListModel.find(function (err, CheckLists) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting CheckList.',
                    error: err
                });
            }
            return res.json(CheckLists);
        });
    },

    /**
     * CheckListController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        CheckListModel.findOne({_id: id}, function (err, CheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting CheckList.',
                    error: err
                });
            }
            if (!CheckList) {
                return res.status(404).json({
                    message: 'No such CheckList'
                });
            }
            return res.json(CheckList);
        });
    },

    /**
     * CheckListController.create()
     */
    create: function (req, res) {
        var CheckList = new CheckListModel({
			date : req.body.date,
			prescribedCheckList : req.body.prescribedCheckList,
			value : req.body.value

        });

        CheckList.save(function (err, CheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating CheckList',
                    error: err
                });
            }
            return res.status(201).json(CheckList);
        });
    },

    /**
     * CheckListController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        CheckListModel.findOne({_id: id}, function (err, CheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting CheckList',
                    error: err
                });
            }
            if (!CheckList) {
                return res.status(404).json({
                    message: 'No such CheckList'
                });
            }

            CheckList.date = req.body.date ? req.body.date : CheckList.date;
			CheckList.prescribedCheckList = req.body.prescribedCheckList ? req.body.prescribedCheckList : CheckList.prescribedCheckList;
			CheckList.value = req.body.value ? req.body.value : CheckList.value;
			
            CheckList.save(function (err, CheckList) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating CheckList.',
                        error: err
                    });
                }

                return res.json(CheckList);
            });
        });
    },

    /**
     * CheckListController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        CheckListModel.findByIdAndRemove(id, function (err, CheckList) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the CheckList.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
