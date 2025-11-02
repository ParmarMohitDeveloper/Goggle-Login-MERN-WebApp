const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());


require('dotenv').config();
require('./models/dbConnect');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT 

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        return callback(null, origin);
    },
    credentials: true,
}));
app.use('/auth/', authRoutes); // <- NEW LINE

app.all('*', (req, res) => {
    res.status(404).json({
        message: `Can't find ${req.originalUrl} on this server!`
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})