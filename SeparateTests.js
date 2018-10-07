function simpleTest(separate){
    let testStr="3+(7+1)+9";
    if(separate(testStr).block=="7+1")return true;
    return false
}

function testWithDoubleBrackets(separate){
    let testStr="3+((7+1))+9";
    if(separate(testStr).block=="(7+1)")return true;
    return false
}

function testWithIncorrectData(separate){
    let testStr="3+(7+1)+9";
    if(separate(testStr).block=="(7+1)")return true;
    return false
}

function testWithIncorrectBrackets(separate){
    let testStr="((1+3)";
    if(separate(testStr)==undefined)return true;
    return false
}


function testWithSingleValueInBrackets(separate){
    let testStr="6+(-1)";
    if(separate(testStr).block=="5")return true;
    return false
}

function testNullData(separate){
     let testStr=undefined;
     if(separate(testStr)==undefined)return true;
     return false
}



module.exports = function separateTests(separate){
    return {
        simpleTest:simpleTest(separate),
        testWithDoubleBrackets:testWithDoubleBrackets(separate),
        testWithIncorrectData:testWithIncorrectData(separate),
        testNullData:testNullData(separate),
        testWithIncorrectBrackets:testWithIncorrectBrackets(separate),
        testWithIncotestWithSingleValueInBrackets:testWithSingleValueInBrackets(separate),

    }
}