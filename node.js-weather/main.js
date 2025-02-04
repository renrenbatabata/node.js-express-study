const request = require("request");
const dotenv = require("dotenv").config();

const argv = process.argv[2];
// console.log(argv)

const options ={
    url : `https://api.openweathermap.org/data/2.5/weather?q=${argv}&units=metric&appid=${process.env.API_KEY}`,
    method:"GET",
    json: true,
};

request(options,(error,res,body)=>{
    if(error){
        console.log("エラーが発生しました",error);
        return;
    }
    if(body.cod !==200){
        console.error("そんな都市ないぞ！！");
        return;
    }

    console.log(`${argv}の気温は`+ body.main.temp+`度だぞ！`)
})

