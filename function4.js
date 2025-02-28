function Addition(Value1, Value2) {
    console.log("Inside addition function");
    var Ans = 0;
    Ans = Value1 + Value2;
    return Ans;
}
console.log("start of application");
var Result = 0;
Result = Addition(10, 11);
console.log("Addition is : " + Result);
console.log("End of application");
