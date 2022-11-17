import axios from "axios"
var LocationListArray = [{
    name: 'Stewart Center', 
    completed: false,
    latitude: 40.4250, 
    longitude: -86.9126
  }, 
  {
    name: 'Windsor Dining Court',
    completed: false,
    latitude: 40.4270,
    longitude: -86.9209
  },
  {
    name: 'Neil Armstrong Hall of Engineering',
    completed: false,
    latitude:40.4310,
    longitude:-86.9148
  },
  {
    name: "Harrison Hall",
    completed: false,
    latitude: 40.42490544985265, 
    longitude: -86.92642550317369
  },
  {
    name: "Discovery Learning Research Center",
    completed: false,
    latitude: 40.42118918194457, 
    longitude: -86.92275087681448
  },
  {
    name: "Krannert School of Management",
    completed: false,
    latitude: 40.423744457373104, 
    longitude: -86.91078299038391
  }
  ]

  for (let i = 0; i < LocationListArray.length; i++) {
    const location = {
        name: LocationListArray[i].name,
        completed: LocationListArray[i].completed,
        latitude: LocationListArray[i].latitude,
        longitude: LocationListArray[i].longitude
    }

    axios.post("http://localhost:4500/add", location)
    .then(res => console.log(res.data))

    window.location = "/"
  }