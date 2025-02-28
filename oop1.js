//we have to design an application which perform addition and substaction of 2 number
//characteristics  -Data(te karnyakarta kay lagnar ahe?)
//Behaviours       -functions (tula ky karaych ahe?)
var Arithematic = /** @class */ (function () {
    function Arithematic() {
    }
    Arithematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
var obj = new Arithematic();
obj.No1 = 11;
obj.No2 = 10;
var Result = 0;
Result = obj.Addition();
console.log("Addition is : " + Result);
Result = obj.Substraction();
console.log("Substraction is : " + Result);
