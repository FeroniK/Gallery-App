const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Image = require('./models/imageModel');

const app = express();
require('dotenv').config();

// MIDDLEWARES

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(morgan('dev'));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(8800, () =>
      console.log('Server and Mongo started ( on port 8800 )')
    )
  );

mongoose.set('useFindAndModify', false);

// ROUTES ( only 2 Routes for this application )

const router = express.Router();

app.use('/api/gallery', router);

// STORE IMAGE

router.post('/', async (req, res) => {
  try {
    const newPost = await Image.create({
      image: req.body.image,
    });

    res.json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET IMAGES

router.get('/', async (req, res) => {
  try {
    const images = await Image.find();

    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
