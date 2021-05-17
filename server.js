const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);    
    var result1 = n1+n2;
    var result2 = n1-n2;
    var result3 = n1*n2;
    var result4 = n1/n2;
    res.send("Num1 = " + n1 + ", Num2 = " +n2 + ", Addition is " + result1 +", Subtraction is "+ result2 + ", Multiplication is " + result3 +", Devision is "+ result4);

});

app.listen(3000, function(){
    console.log("Server has started on port 3000")
});
