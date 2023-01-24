const belowTen = [null, "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const belowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const belowHundred = [null, null, "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

function myNum(num, arrNum) {
    if (num < 10)
        return arrNum.push(belowTen[num]);
    if (num < 20 && num > 9)
        return arrNum.push(belowTwenty[num - 10]);
    if (num < 100 && num > 19)
        return arrNum.push(belowHundred[Math.floor(num / 10)], belowTen[Math.floor(num % 10)]);
    if (num < 1000 && num > 99)
        return arrNum.push(belowTen[Math.floor(num / 100)], "Hundred") && myNum(num % 100, arrNum);
    if (num < 1000000 && num > 999)
        return myNum(Math.floor(num / 1000), arrNum) && arrNum.push("Thousand") && myNum(num % 1000, arrNum);
    if (num < 1000000000 && num > 999999)
        return myNum(Math.floor(num / 1000000), arrNum) && arrNum.push("Million") && myNum(num % 1000000, arrNum);
    if (num < 1000000000000 && num > 999999999)
        return myNum(Math.floor(num / 1000000000), arrNum) && arrNum.push("Billion") && myNum(num % 1000000000, arrNum);
};

const numberToWords = (num) =>{
    let arrNum = [];
    if (num === 0)
        return "Zero"
    myNum(num, arrNum);
    return arrNum.filter(el => el !== null).join(" ")
}
