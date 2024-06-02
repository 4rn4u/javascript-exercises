const repeatString = function(word, times) {
    let ret= '';
    if (times < 0){
        return "ERROR"
    }
    for(let i = 0; i<times; i++){
        ret += word;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
