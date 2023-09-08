const bodyParser = require('body-parser')
const express = require('express')
const webRouter = require('./router/web');
const userRouter = require('./router/users.router');
const authRouter = require('./router/auth.router');
const pollsRouter = require('./router/polls.router');
const connection = require('./database/connectDB');
// const initDB = require('./src/database/init');
const configViewEngine = require('./public/views/viewEngine');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;
app.use(bodyParser.json({limit: '50mb', extended: true}));

const jwt = require('jsonwebtoken');

// const authRouter = require('./src/router/auth');

// const hash = require('./src/middleware/hash');s

const cors = require('cors');

app.use(cors());


app.use(express.json({limit: '50mb'}));

webRouter(app);
userRouter(app);
authRouter(app);
pollsRouter(app);
configViewEngine(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})