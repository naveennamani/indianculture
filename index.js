const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/hello", (req, res) => {
    res.send("Hello world!");
});

app.get("/file", (req, res) => {
    const pdf_url = req.query.url;
    const referrer = req.query.referrer;
    fetch(pdf_url, {
        method: "get",
        headers: {
            origin: "https://indianculture.gov.in",
            host: "indianculture.gov.in"
        },
        referrer: referrer
    }).then((res) => {
        res.send(res.body);
    })
});

app.listen(port, () => console.log("Server started"));
