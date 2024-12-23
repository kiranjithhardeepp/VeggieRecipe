const express = require('express')
const mongoose = require('mongoose')
const app= express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const userRoutes = require('./src/routes/register'); 
const recipeRoutes = require('./src/routes/recipeSubmit'); 
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require("body-parser");

const profileRoute = require('./src/routes/profile');
console.log(profileRoute);


console.log('Current working directory:', process.cwd());

const loginRoutes = require('./src/routes/login');

const dotenv = require('dotenv');
const result = dotenv.config({ path: './.env' });

if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  console.log('Environment variables loaded:', result.parsed);
}

console.log('JWT_SECRET:', process.env.JWT_SECRET);

console.log('Node environment:', process.env.NODE_ENV || 'development');



const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(bodyParser.json());

app.use(cors({ 
  origin: "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

const jwtSecret = process.env.JWT_SECRET; // JWT Secret from .env


io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

 

  async function main() {
      try {
          await mongoose.connect('mongodb+srv://nandithanataraj10092002:5wmSEUIUVXfikaOc@veggify-recipe-app.bavu5.mongodb.net/veggify-recipe-app?retryWrites=true&w=majority&appName=veggify-recipe-app');
          console.log("MongoDB connected successfully!");
      } catch (err) {
          console.error("Error connecting to MongoDB:", err.message);
          process.exit(1);  // Exit the process if the database connection fails
      }
  }
  
  main();  // Call the function to connect to MongoDB
  
  app.get('/', (req, res) => {
      res.send('Veggify Recipe App Server is Running');
  });
  


app.use('/api', userRoutes);
app.use('/api', loginRoutes); // Login routes
app.use('/api', profileRoute);
app.use('/api', recipeRoutes);



const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute");

app.use('/api', ItemRoutes)
app.use('/api',CategoryRoutes)

server.listen(port,() => {
    console.log(`Server running on port ${port}`)
})