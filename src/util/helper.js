let printDate = function(){
    let today = new Date();
    let date = today.getFullYear()+ '-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date)
}
let printMonth = function(){
    const monthNames =["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    const d = new Date();
    console.log("the current month is :"+ monthNames[d.getMonth()])
}
let getBatchInfo = function(){
    console.log(" Uranium , W3D3, the topic for today is Nodejs module system")
}
module.exports.date = printDate
module.exports.month= printMonth
module.exports.info= getBatchInfo