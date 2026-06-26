const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'mathapi-taller' });
});

app.get('/add/:a/:b', (req, res) => {
    const result = Number(req.params.a) + Number(req.params.b);
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;