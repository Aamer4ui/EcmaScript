const BiggerNumOpt = (num1 , num2 , num3 , num4) =>
    // let BadaNum = 0;
    // BadaNum = num1 > num2 ? num1 : num2;
    // BadaNum = BadaNum > num3 ? BadaNum : num3;
    // BadaNum = BadaNum > num4 ? BadaNum : num4;
    // return BadaNum;

    Math.max (num1 , num2 , num3 , num4); /// other option optimum

console.log(`Bigger Number Is ${BiggerNumOpt(23, 115 ,85 , 55)}`);