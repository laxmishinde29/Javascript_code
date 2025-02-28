function CalculatePercentage(Marks, outof) {
    if (outof === void 0) { outof = 500; }
    var Result = 0;
    Result = (Marks / outof) * 100;
    return Result;
}
console.log(CalculatePercentage(230)); //(230,500)
console.log(CalculatePercentage(230, 300)); //(230,300)
