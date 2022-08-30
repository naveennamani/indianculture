const express = require("express");
const app = express();

app.get("/index.html", (req, res) => { res.sendFile("index.html") });

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

app.listen(8000, () => console.log("Server started"));
