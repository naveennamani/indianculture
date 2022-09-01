const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/hello", (req, res) => {
    res.send("Hello world!");
});

app.get("/file", (req, res) => {
    const pdf_url = req.query.url;
    const referrer = req.query.referrer;
    console.log(pdf_url, referrer);
    fetch(pdf_url, {
        method: "get",
        headers: {
            origin: "https://indianculture.gov.in",
            host: "indianculture.gov.in",
            "User-Agent": "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
        },
        referrer: referrer
    }).then((result) => {
        res.send(result.body);
    })
});

app.listen(port, () => console.log("Server started"));
