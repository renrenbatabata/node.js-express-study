const express = require("express");
const app =express();
const PORT = 3000;
const userRouter= require("./routes/user")

// app.use(mylogger);//一番上でやらないといけない！
// app.use(express.static("public"));//静的なファイルを読み込めるhtml
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // console.log("hello");
    // res.send("<h1>こんにちは</h1>こんにちは")
    // res.sendStatus(400);
    // res.status(500).send("えれーです")
    // res.status(500).json({msg :"エラーです"});
    res.render("index",{text:"名探偵コナンはかっこいい"})
});


//ルーティング
app.use("/user",userRouter);


app.listen(PORT,()=>console.log("サーバーできた！すごい！"));