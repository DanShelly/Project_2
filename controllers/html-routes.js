const isAuthenticated = require("../config/middleware/authenticated");
const path = require("path");
const db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("LandingPage", { title: "LandingPage", css: "./stylesheets/Css/LandingPage.css" });
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/SnapShot", isAuthenticated, function(req, res) {
        res.render("index", { title: "Snapshot", css: "./stylesheets/Css/index.css", JS: "./public/JS/indexpage.js" });
    });

    app.get("/UserSetUpBudget", isAuthenticated, function(req, res) {
        res.render("UserSetUpBudget", { title: "Budget", css: "./stylesheets/Css/UserSetUpBudget.css" });
    });

    app.get("/Signup", function(req, res) {
        res.render("Signup", { title: "Landing", css: "./stylesheets/Css/LandingPage.css" });
    });

<<<<<<< HEAD
    app.get("/MoreCatInfo/:cat", isAuthenticated, function(req, res) {
        console.log(req.user);
                db.Expenses.findAll({
                    // temp hard code 3 for expense category
                    where: {category: req.params.cat},
                    include: [{
                    model: db.User,
                    // temp hard code 1 for userId
                    where: {id : req.user.id}
                    }]
                }).then(expenses => {
                    /* ... */
                    console.log(JSON.stringify(expenses))
                    res.render("MoreCatInfo", { 
                        title: "CategoryInfo", 
                        CSS: "./stylesheets/Css/MoreCatInfo.css",
                        userId: req.user.id,
                        expenses: expenses
                     })

                })
                .catch(err => {
                    console.log(err);
                    res.status(500).end();
                });
        
=======
    app.get("/MoreCatInfo", function(req, res) {
        res.render("MoreCatInfo", { title: "CategoryInfo", css: "./stylesheets/Css/MoreCatInfo.css" })
>>>>>>> 52901504b8d35e133fd26737ff8bb8fab59f3924
    });

    app.get("/AboutUs", function(req, res) {
        res.render("AboutUs", { title: "About Us", css: "./stylesheets/Css/AboutUs.css" })
    });


    // app.get("/MoreCatInfo/:cat", isAuthenticated, function(req, res) {
    //     console.log(req.user);
    //     db.Expenses.findAll({
    //             // temp hard code 3 for expense category
    //             where: { category: req.params.cat },
    //             include: [{
    //                 model: db.User,
    //                 // temp hard code 1 for userId
    //                 where: { id: req.user.id }
    //             }]
    //         }).then(expenses => {
    //             /* ... */
    //             console.log(JSON.stringify(expenses))
    //             res.render("MoreCatInfo", {
    //                 title: "CategoryInfo",
    //                 css: "./stylesheets/Css/MoreCatInfo.css",
    //                 userId: req.user.id,
    //                 expenses: expenses
    //             })

    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(500).end();
    //         });

    // });
}