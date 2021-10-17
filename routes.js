const { Router } = require('express')
const router = Router()
const Dogs = require('./models/dogs')

router.get('/get-dogs', async  (req, res) => {
    try {
        const dogs = await Dogs.find().populate('breedId')
        const response = req.headers.search_data !== '' ? dogs.filter(item => item.breedId.title.match(req.headers.search_data)) : dogs
        const searchSelect = req.headers.select !== 'Nothing' ? response.filter(item => item.breedId.breed === req.headers.select) : response
        const searchDogs = searchSelect.length > 10 ? searchSelect.slice(10 * req.headers.page , 10 * req.headers.page + 10) : searchSelect
        const counter = searchSelect.length
        res.json({dogs: searchDogs, counter})
    }catch (e) {
        console.log(e.message)
    }
})

router.get('/select-dogs', async  (req, res) => {
    try {
        const dogs = await Dogs.find().populate('breedId')
        const selectDogs = dogs.map(dog => dog.breedId.breed)
        res.json({dogs: selectDogs})
    }catch (e) {
        console.log(e.message)
    }
})

module.exports = router