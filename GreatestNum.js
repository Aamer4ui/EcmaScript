const greatestNum = (arrNum) =>{
    let maxNum =0;
    arrNum.forEach(element => {
        if (element<maxNum){
            maxNum = element;
        }
    });
    return maxNum;
};
console.log(greatestNum([7,5,1,25,75,1,8,99,3]))