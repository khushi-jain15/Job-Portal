const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./router/userRoutes');
const blogRouter = require('./router/blogRoutes'); // Import blog routes
const internRouter = require('./router/internRoutes'); // Import internship routes
const subscribeRouter = require("./router/subscribeRouter");
const notificationRoutes = require("./router/notificationRoutes");

const app = express();


// const path=require('path');

const atlasConnectionString = 'mongodb://localhost:27017/ai_portal';

mongoose
  .connect(atlasConnectionString)
  .then(() => {
    console.log('DB connection successful!');
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });



// Middleware
// app.use(cors({ credentials: true }));
app.use(cors({
  origin: ['https://fusiotech.in', 'https://www.fusiotech.in', 'http://localhost:8000'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  
}));
app.options('*', cors());  // Enable preflight requests for all routes


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());



// Routes
app.use('/', userRouter);
app.use('/blogs', blogRouter); // Blog routes under /blogs
app.use('/internships', internRouter); // Internship routes under /internships
app.use("/api", subscribeRouter);
app.use("/api/notifications", notificationRoutes);

// Subscription model
const subscriptionSchema = new mongoose.Schema({ email: { type: String, required: true, unique: true } });
const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Endpoint to subscribe
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
    try {
        const newSubscription = new Subscription({ email });
        await newSubscription.save();
        res.status(201).send({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error subscribing' });
    }
});

// Endpoint to check subscription
app.get('/api/check-subscription', async (req, res) => {
    const { email } = req.query;
    const subscribed = await Subscription.findOne({ email });
    res.send({ subscribed: !!subscribed });
});



// added later
// app.use(express.static(path.join(__dirname, 'client', 'dist')))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))

// })



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
