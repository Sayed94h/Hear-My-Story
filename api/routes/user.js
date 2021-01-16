const User = require('../models/User');
const express = require('express');
const { auth } = require('../middleware');

const app = express();

const updateUser = (req, res) => {
    const { id } = req.params;

    if (req.user._id != id) {
        return res.status(401).json({
            error: true,
            msg: 'Operation not permitted'
        });
    }

    User
        .findOneAndUpdate(
            { '_id': id }, 
            { ...req.body,}, 
            { new: true, rawResult: true },
        )
        .then(result => {
            const user = {
                _id: result.value._id,
                email: result.value.email,
                name: result.value.name
            };
            return res.status(200).send(user)
        })
        .catch(error =>  {
            return res.status(400).json({ error })
        })
}

const deleteUser = (req, res) => {
    const { id } = req.params;

    if (req.user._id != id) {
        return res.status(401).json({
            error: true,
            msg: 'Operation not permitted'
        });
    }

    User
        .deleteOne({ _id: id })
        .then(result => {
            return res.status(200);
        })
        .catch(err => {
            return res.status(400).send(err)
        })
    ;
}

app.put('/users/:id/update', auth, updateUser);
app.delete('/users/:id', auth, deleteUser);

module.exports = app;
