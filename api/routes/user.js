const { User } = require('../models/User');
const express = require('express');
const router = express.Router();

const updateUser = (req, res) => {
    const { id } = req.params
    User
        .findOneAndUpdate(
            { '_id': id }, 
            { ...req.body,}, 
            { new: true, rawResult: true },
        )
        .then(result => {
            res.status(200).send(result)
        })
        .catch(error => res.status(400).json({ error }))
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    User
        .deleteOne({ _id: id })
        .then(result => {
            res.send(result)
        })
        .catch(err => res.status(400).send(err))
    ;
}

router.put(
    'users/:id/update',
    updateUser
)

router.delete('users/:id', deleteUser);

module.exports = router;
