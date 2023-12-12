const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const places = require('./data/places.json');

const hotels = require('./data/hotels.json');

app.get('/', (req, res) => {
    res.send('Travel guru running')
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.get('/placeDetails/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const seletedPlace = places.find(pl => pl._id === id);
    res.send(seletedPlace)
})
// app.get('/hotels', (req, res) => {

//     res.send(hotels)
// })
app.get('/places/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const placeByHotels = hotels.filter(hotel => parseInt(hotel.category_id) === id);
    res.send(placeByHotels)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})