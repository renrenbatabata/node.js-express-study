const express = require("express");
const router = express.Router();

// router.use(mylogger);
router.get("/",mylogger,(req,res)=>{
    res.send("ユーザーです");
})

router.get("/info",(req,res)=>{
    res.send("ユーザーだよ");
})

router.get("/:id",(req,res)=>{
    res.send(`${req.params.id}のユーザー情報を取得したぞ`)
})
// router.post("/:id",(req,res)=>{
//     res.send(`${req.params.id}のユーザー情報を取得したぞ`)
// })
// router.delete("/:id",(req,res)=>{
//     res.send(`${req.params.id}のユーザー情報を取得したぞ`)
// })

// ミドルウェア
function mylogger(req,res,next){
    console.log(req.originalUrl);
    next();
}

module.exports = router;