
const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require ('path');
const morgan = require ('morgan');
const dotenv = require('dotenv');
const authRoutes = require ('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

//configure environment variables
dotenv.config ( {
  path: '.env'
});

//connect to database
const connectDB = async () => {
  try {
    await mongoose.connect (process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log ("MongoDB connected");
  }
  catch (err) {
    console.log (err);
    process.exit (1);
  }
}
connectDB();

//Set view engine
app.set ('view engine', 'ejs');
app.set ('views', path.resolve(__dirname, 'views'));

//middleware
app.use(morgan("dev"));
app.use(express.static("./public"));
app.use (bodyParser.urlencoded( {extended: true} ));
app.use(cookieParser());
app.use(authRoutes);


//Connect server
const port = process.env.PORT || 8080;
app.listen (port, ()=>{
  console.log(`App listening at: http://localhost:${port}`);
})
