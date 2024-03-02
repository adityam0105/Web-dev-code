const express = require("express");
const app = express();
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.use(express.json());

app.get("/", function (req, res) {
  const jhonKidneys = users[0].kidneys;
  const numberOfKidneys = jhonKidneys.length;
  let numberOfhealthyKidneys = 0;
  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].healthy) {
      numberOfhealthyKidneys += 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfhealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfhealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// data is sent in body ie in object
app.post("/", function (req, res) {
  //increasing healthy kidneys
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  //put all healthy kidneys
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  if (isThereAtleastOne()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "done",
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys!",
    });
  }
});
//checker
function isThereAtleastOne() {
  let atleastOneUnhealthy = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthy = true;
    }
  }
  return atleastOneUnhealthy;
}

app.listen(3000);
