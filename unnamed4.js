//Lambda statment
var TEMP = function (No1, No2) {
    console.log("Inside Addition lambda statment");
    var Result = 0;
    Result = No1 + No2;
    return Result;
};
var Ans = 0;
Ans = TEMP(10, 11);
console.log("Adiition is : " + Ans);
