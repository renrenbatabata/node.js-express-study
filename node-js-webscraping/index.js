const PORT = 3000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

// ウェブスクレイパー
const URL = "https://search.rakuten.co.jp/search/mall/keyboard/";

axios(URL)
    .then((response) => {
        const htmlParser = response.data;
        const data = [];

        // cheerio を使って HTML をパース
        const $ = cheerio.load(htmlParser);

        // 商品リストをループしてタイトルを取得
        $(".searchresultitem").each(function () {
            const title = $(this).find(".title-wrapper--2ELwz").text();
            const price = $(this).find(".price--2TJ7x price-list--1BhtT").text();
            data.push({title,price});
            console.log(data);

        });
    })
    .catch((error) =>{
        console.error("Error fetching data:",error)
    })


// Express サーバーを起動
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
