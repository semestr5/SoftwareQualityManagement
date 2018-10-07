const a=4;
const b=7;

function testCalcPositiveValuesSumm(calc){
    if(a+b==calc(`${a}+${b}`))return true;
    return false;
}

function testCalcPositiveValuesSubstract(calc){
    if(a-b==calc(`${a}-${b}`))return true;
    return false;
}

function testCalcPositiveValuesMulti(calc){
    if(a*b==calc(`${a}*${b}`))return true;
    return false;
}

function testnullData(calc){
    if(calc(undefined)==undefined)return true;
    return false;
}

function testDataDiffOfString(calc){
    if(calc({})==undefined)return true;
    return false;
}


module.exports = function calcTests(calc){
return {
    testCalcPositiveValuesSumm:testCalcPositiveValuesSumm(calc),
    testCalcPositiveValuesSubstract:testCalcPositiveValuesSubstract(calc),
    testCalcPositiveValuesMulti:testCalcPositiveValuesMulti(calc),
    testnullData:testnullData(calc),
    testDataDiffOfString:testDataDiffOfString(calc),

}

}