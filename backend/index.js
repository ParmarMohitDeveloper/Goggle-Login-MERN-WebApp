const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());


require('dotenv').config();
require('./models/dbConnect');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT 

// ✅ Allow only your deployed frontend and localhost (for development)
app.use(cors({
  origin: ["https://goggleloginmern.netlify.app", "http://localhost:5173"],
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
