const express = require('express');
const router = express.Router();
const passport = require('passport');

// import models
const AgentRegister = require('../models/AgentRegister');

router.get('/AgentRegister', (req, res) => {
    res.render("AgentRegister")
});

router.post('/signingup', async (req, res) => {
    try {
        const user = new Signup(req.body);
        let existingUser = await Signup.findOne({
            email: req.body.email
        })
        if (existingUser) {
            return res.status(400).send("Not registered, email already exists")
        } else {
            await Signup.register(user, req.body.password, (error) => {
                if (error) {
                    throw error;
                }
                res.redirect("/login")
            });
        }
        console.log(user)
    } catch (error) {
        res.status(400).render("signup")
        console.log(error);
    }
});

router.get("/login", (req, res) => {
    res.render("login")
})

router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }),
    (req, res) => {
        console.log(req.body);
        req.session.user = req.user;
        if (req.user.role === "manager") {
            res.redirect

        }
        res.redirect("/userSignIn")

    });

