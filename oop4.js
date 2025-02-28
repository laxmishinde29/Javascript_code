var Arithematic = /** @class */ (function () {
    function Arithematic(X, Y) {
        this.No1 = X;
        this.No2 = Y;
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
var Result = 0;
var obj1 = new Arithematic(11, 10);
Result = obj1.Addition();
console.log("Addition is : " + Result);
var obj2 = new Arithematic(51, 2);
Result = obj2.Substraction();
console.log("Substraction is : " + Result);
