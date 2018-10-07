const calcTests = require('./CalcTests')
const separateTests = require('./SeparateTests')

const openSymb='(';
const closeSymb=')';


function compile(str){
    while(~str.toString().indexOf(openSymb)){
        str=parse(str);
    }
    return calc(str);
}

function parse(str){
    if(~(str.toString().indexOf(openSymb))){
        let obj=separateBlock(str);
        let curr=`${obj.str1}${parse(obj.block)}${obj.str2}`;
        console.log(curr);
        let sub=curr;
        return curr
        // return calc(curr);
    }
    return calc(str);

}

function separateBlock(str){
    if(!str)return undefined;
    let openCounter=0;
    let closeCounter=0;
    let obj={};

    for(let i=0;i<str.length;i++){
        if(str[i]==openSymb){
            openCounter++;
        }
        else if(str[i]==closeSymb){
        closeCounter++;
    }

    if((openCounter)&&(openCounter==closeCounter)){
        let blockStart=str.indexOf(openSymb);
        let blockEnd=i;
        if(openCounter==1 && (blockEnd-blockStart==3)){
            obj.str1='';
            obj.block=calc(str);
            obj.str2='';
            return obj;
        }

        obj.str1=str.substring(0,blockStart);
        obj.block=str.substring(blockStart+1,blockEnd);
        obj.str2=str.substring(blockEnd+1);

        let	reg	=/[()]/;
        if(!reg.test(obj.block)){
            obj.block=calc( obj.block)
        }

        return obj;
    }    
    }
    return undefined
}

function calc(str){

    // console.log("calc",str)
    var	reg	=	/[^0-9/*+-]/;
    // if(reg.test(str))return undefined
    if(typeof(str)=="string" || typeof(str)=="number"){
        return eval(str)
    }
    return undefined

    // let	reg	=	/[^0-9/*+-]/;
    // if(reg.test("11001/09001d0100110"))return undefined;

}
console.log("calcTests",calcTests(calc));
console.log("separateTests",separateTests(separateBlock))


let str='1+(4+9)*(6+(-1))';

// console.log("separateBlock",separateBlock("(6+(-1))"))
// let str='(6+(-1))';

// console.log("eval",eval(str))
// try {
    // console.log("compile",compile(str))
// } catch (err) {
//   console.log("catch smth",err)
// }

// console.log("++++",separateBlock(''))
// console.log("calc test",calc("sa"))

// var	reg	=	/[^0-9/*+-]/;
// console.log(reg.test("11001/09001d0100110"));