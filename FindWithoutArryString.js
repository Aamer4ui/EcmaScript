const greatestStr = (str) =>{
    // split to use divided (seperated) word one by one
    // If an empty string ("") is used as the separator, the string is split between each character.
    // If an space string (" ") is used as the separator, the string is split between each word.
    const arrStr = str.split(" ");
    // -----------------------------------
    let maxStr =arrStr[0].length;
    let strData = arrStr[0];
    arrStr.forEach(element => {
        if(maxStr < element.length) {maxStr=element.length;
            strData = element;
        };  
    });
    return strData;
}
console.log(greatestStr("he is a silent Boy in the whole class and he is very talented"));