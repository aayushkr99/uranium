let trim = function(){
    let text = " funct ion  Up  "
    let result = text.trim();
    console.log(result)
}
let changetoLowerCase = function(){
    let text1 = "FunctiONUP"
    let result1 = text1.toLowerCase();
    console.log(result1)
}
let changetoUpperCase = function(){
    let text2 = "FunctiONUP"
    let result2 = text2.toUpperCase();
    console.log(result2)
}
module.exports.trim1=trim
module.exports.lower=changetoLowerCase
module.exports.upper=changetoUpperCase