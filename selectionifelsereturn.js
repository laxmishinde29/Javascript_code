function DisplayClass(Age) {
    if (Age >= 60) {
        return true;
    }
    else {
        return false;
    }
}
var MyAge1 = 34;
var Result = false;
Result = DisplayClass(MyAge1);
if (Result == true) {
    console.log("you are senior citizen");
}
else {
    console.log("you are not a senior citizen");
}
