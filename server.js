require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConfig.js');
const path = require("path");

const app = express();

app.use(cors(
  {
    origin: process.env.REACT_APP_FRONT_END,
    methods: ["POST", "GET"],
    credentials: true
  }
));

// Routers
const productRouter = require('./routes/productRoutes.js');

app.use(express.json());
app.use('/api/products', productRouter);
// app.use(express.static(path.join(__dirname, "client", "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// })

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is listening on PORT: ${PORT}`);
// })

const startApp = async () => {
  try {
    await connectDB();
    console.log('Database connected successfully');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  }
  
}

startApp();