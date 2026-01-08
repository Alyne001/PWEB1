const express = require (`express`);
const app = express();
const PORT = 8000;
app.listen(PORT, () =>
    {
    console.log(`Hello API on port ${PORT} `);
})

app.set(`/v1/hi`, function(rec, res){
    const out = {
        msg: "Hello word!"
    }
    res.status(200).json(out)
})

app.get(`/v1/hi/user/:name`, function(req, res){
    const out = {
        msg: "Hello, " + req.params.name
    }
    res.status(200).json(out)
})

app.use(express.urlencoded({ extended: true }))
app.post('/v1/hi', function(req, res) {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });

    }

    const out = {
        msg: `Hello, ${name.toUpperCase()} from POST!`,

}});

app.get(`*`, function(req, res){
    const err = {
        error: "Invalid endpoint"
    }
    res.status(404).json(err)
});