const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];

// es6特性对象解构
function say ({ subject, verb, object }) {
    // es6特性：模板字符串
    console.log(`${subject}  ${verb} ${object}`)
}
    // es6特性：for..of
for (const s of sentences) {
    say(s)
}
const o = {
    name: 'Julie',
    greeBackwards: function () {
        getReverseName = () => {
            let nameBackwords = '';
                for(let i = this.name.length-1; i>=0;i--){
                    nameBackwords += this.name[i]
                }
                return nameBackwords
        };
        console.log(`${ getReverseName() } si eman ym , olleH`)
    }
};
    o.greeBackwards();
// 闭包
let globalFunc;
{
    let blockVar  = 'a';
    globalFunc = function () {
        console.log(blockVar)
    }
}
globalFunc();
//闭包
let f;
{
    let o = {note : 'Safe'};
    f = function () {
      return o
    }
}
let oRef = f ();
oRef.note = "Not so safe after all!";
// 即时调用函数表达式IIIFE
const message = (function () {
    const secret = "I'm a secret";
    return `The secret is ${secret.length} characters long.`;
})();/*这段代码中，使用函数表达式创建了一个匿名函数，然后立即调用该函数，IIFE的好处是，任何内部信息都有自己的作用域，
并且因为它本身就是函数，它还可以向作用域外传递信息。*/
console.log(message);
/*使用let声明的变量，如果引用的变量未声明，将会得到一个错误
* var 声明的变量，可以再声明前被引用 var声明的变量采用了提升机制。JavaScript回扫描整个作用域，任何使用var
* 声明的变量都会被提升至作用域的顶部*/
//你的代码
/*if(x !== 3){
    console.log(y);
    var y = 5;
    if(y == 5){
        var x = 3;
    }
    console.log(y);
}
if(x ===3 ){
    console.log(y);
}*//*JavaScript解释代码的方式*/
var x;
var y;
if(x !== 3){
    console.log(y);
    y = 5;
    if(y === 5){
        x = 3;
    }
    console.log(y);
}
if( x === 3){
    console.log(y);
}
//使用var声明的变量，JavaScript不会关心它是否有重复声明
var x = 3;
if(x === 3){
    var x = 2;
    console.log(x);
}
console.log(x);
//函数提升
/*类似var 声明的变量，函数声明也会被提升至他们作用域的顶部，这允许再函数声明之前被调用*/
f2();
function f2() {
    console.log('f');
}
//应注意 赋给变量的函数表达式不会提升，他们的作用域规则跟变量是一样的 如下代码报错f3 is not defined
/*f3();
var f3 = function (){
    console.log('f');
};*/
