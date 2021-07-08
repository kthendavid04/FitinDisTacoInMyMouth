const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000, () => {
    console.debug('App listening on :3000');
});

app.use(morgan('tiny'));

morgan.token('host', function(req, res) {
    return req.hostname;
});

app.use(morgan(':method :host :status :param[id] :res[content-length] - :response-time ms'));

morgan.token('param', function(req, res, param) {
    return req.params[param];
});
module.exports = router;