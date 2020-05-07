const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const tasks = require('./data/tasks');

/** create new express app */
const app = express();

/** prevent cross-origin error */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors());

/** parse the body of the request */
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

/** mock '/' route */
app.get('/', (req, res) => {
    res.send('Hello World!');
});

/** Tasks Endpoint */
app.get('/tasks', (req, res) => {
    return res.status(200).json(tasks);
});

/** express server runs at port :4000 */
app.listen(4000, () => {
    console.log('Express mock server listening on port 4000!');
});

module.exports = app;
