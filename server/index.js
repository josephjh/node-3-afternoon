const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
require('dotenv').config();
const app = express();
const checkForSession = require('./middlewares/checkForSession');
const swagCtrl = require('./controllers/swag_controller');
const authCtrl = require('./controllers/auth_controller');

app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkForSession)

app.get(`/api/swag`, swagCtrl.read)
app.post(`/api/login`, authCtrl.login)
app.post(`/api/register`, authCtrl.register)
app.post(`/api/signout`, authCtrl.signout)
app.get(`/api/user`, authCtrl.getUser)

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {console.log('4111 Awaiting Orders')})