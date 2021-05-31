const route = require('express').Router()
const User = require('../../db').User

route.get('/', (req, res) => {
    // We want to send the array of all users from our Database here

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not recieve Users"
            })
        })
})

route.post('/', (req, res) => {
    //We expect the req to have name in it so that we will create a new user

    User.create({
        name: req.body.name
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add a new user"
        })
    })
})

exports = module.exports = route