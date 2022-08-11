const express = require('express');
const router = express.Router();


//.........................Assignment- post request - player......................................................
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
});


//------------------------------------------Post API Assignment 2-------------------------------------


router.post("/vote", function (req, res) {
    let person = [
      {
        name: "PK",
        age: 10,
        votingStatus: false,
      },
      {
        name: "SK",
        age: 20,
        votingStatus: false,
      },
      {
        name: "AA",
        age: 70,
        votingStatus: false,
      },
      {
        name: "SC",
        age: 5,
        votingStatus: false,
      },
      {
        name: "HO",
        age: 40,
        votingStatus: false,
      },
    ];
  
    let votingAge = req.query.votingAge;
  
    for (i = 0; i < person.length; i++) {
      if (person[i].age > votingAge) {
        person[i].votingStatus = true;
      }
    }
  
    //   let result = person.filter((x) => x.age >votingAge).map((x) => (x.votingStatus = true));
  
    res.send({ date: person, status: true });
  });



module.exports = router;

