var Data = new Array(4);
Data = [11, 21, 51, 101];
var Cnt = 0;
for (Cnt = 0; Cnt < Data.length; Cnt++) {
    console.log(Data[Cnt]);
}
var Sum = 0;
for (Cnt = 0; Cnt < Data.length; Cnt++) {
    Sum = Sum + Data[Cnt];
}
console.log("Summation of all elements is : " + Sum);
