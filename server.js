const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const database = require("./mongo");
const routes = require("./routes");
const axios = require("axios")
const Breeds = require('./models/breeds')
const Dogs = require('./models/dogs')
const cors = require('cors')

const PORT = process.env.PORT || 8082;

// Headers
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)

async function start() {
    try {
        await database();

        await app.listen(PORT, async () => {
            console.log(`running server on port ${PORT}`);
            // const breeds = await Breeds.find()
            // if (breeds.length) {
            //     return
            // }
            //
            // for (let i = 0; i < 100; i++) {
            //     const response = await axios.get('https://dog.ceo/api/breeds/image/random')
            //     const breed = response.data.message.split('/')[4]
            //     const title = response.data.message.split('/')[5].split('.')[0]
            //     const image = response.data.message
            //     const item = new Breeds({title, breed})
            //     await item.save()
            //     const dogItem = new  Dogs({image, breedId: item._id})
            //     await dogItem.save()
            // }
        });
    } catch (e) {
        console.log('running server ERROR :', e)
    }
}

return start();