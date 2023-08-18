require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const cors = require("cors");


const app = express();
app.use(express.json())
app.use(cors(
    {origin: 'https://gigih-final-project-murex.vercel.app'}));



mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


require("./routes/video.routes")(app);



app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
});

