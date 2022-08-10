const express = require('express');
const router = express.Router();

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == req.body.name) {
            res.send("players name is already exists")
        }

    }
    players.push(req.body)
    res.send({ data: players, status: true })
})


module.exports = router;
// adding this comment for no reason