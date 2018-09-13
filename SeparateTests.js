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

module.exports = function separateTests(separate){
    return {
        simpleTest:simpleTest(separate),
        testWithDoubleBrackets:testWithDoubleBrackets(separate),
        testWithIncorrectData:testWithIncorrectData(separate),
        }
}