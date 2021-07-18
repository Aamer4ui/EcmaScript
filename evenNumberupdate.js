const evenNum = (nums) => {
    let sumEven = 0;
    let sumOdd = 0;
    // for(let i = 0; i < edges.length; i++){
    //     sum = sum + edges[i];
    // }
    // return sum * numberWire * rate;
    // nums.forEach(element => { element % 2 === 1 && (sum = sum + element);
    nums.forEach(element => { element % 2 === 0 
        ?(sumEven = sumEven + element)
        :(sumOdd = sumOdd + element);
});
    return `sum of even number is ${sumEven} and
    sum of odd number is ${sumOdd}
    total number is ${sumEven+sumOdd}`


};
console.log(`Total even Number sum is ${evenNum([5,2,7,9,10,8,17,115,10])}/-`);