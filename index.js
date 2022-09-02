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
    fetch(pdf_url, {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            pragma: "no-cache",
            "sec-ch-ua":
                '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            Referer: referrer,
            "Referrer-Policy": "no-referrer-when-downgrade",
        },
        body: null,
        method: "GET",
    })
        .then((res) => res.arrayBuffer())
        .then((buf) => res.send(buf));
});

app.listen(port, () => console.log("Server started"));
