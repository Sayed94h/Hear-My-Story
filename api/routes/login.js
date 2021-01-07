const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const User = require('../models/user');
const { auth } = require('../middleware');
const path = require('path');


const app = express();
// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'static')));

// adding new user (sign-up route)
app.post('/register', function(req, res) {
    let newUser = new User(req.body);
    User.findOne({ email: newUser.email }, function(err, user) {
        if (user) return res.status(400).json({
            auth: false,
            message: "email exits"
        });

        newUser.save((err, doc) => {
            if (err) {
                return res.status(400).json({
                    error: true,
                    message: err.message
                });
            }
            res.status(200).json({
                success: true,
                user: { // Control the output we don't want to return the password that would be bad
                    _id: doc._id,
                    email: doc.email,
                    name: doc.name
                }
            });
        });
    });
});


// login user
app.post('/login', function(req, res) {
    let token = req.cookies.auth;
    User.findByToken(token, (err, user) => {
        if (err) {
            return res(err);
        }

        if (user) {
            return res.status(400).json({
                error: true,
                message: "You are already logged in"
            });
        }

        User.findOne({ 'email': req.body.email }, function(err, user) {
            if (!user) return res.json({ isAuth: false, message: ' Auth failed ,email not found' });

            user.comparepassword(req.body.password, (err, isMatch) => {
                if (!isMatch) return res.json({ isAuth: false, message: "password doesn't match" });

                user.generateToken((err, user) => {
                    if (err) return res.status(400).send(err);
                    res.cookie('auth', user.token).json({
                        isAuth: true,
                        id: user._id,
                        email: user.email
                    });
                });
            });
        });
    });
});

//logout user
app.get('/logout', auth, function(req, res) {
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err);
        res.status(200).send("See you soon!");
    });
});

// get logged in user
app.get('/profile', auth, function(req, res) {
    res.json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        name: req.user.name

    })
});


app.get('/', function(req, res) {
    res.status(200).send(`Welcome to Hear My Story App`);
});

module.exports = app;

