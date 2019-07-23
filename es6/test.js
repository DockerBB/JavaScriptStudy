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
//数组概览
const arr1 = [1,2,3];
const arr2 = ["one",2,"three"];
const arr3 = [arr1,arr2];
const arr4 = [
    { name: "Fred", type: "object", luckyNumber: [5,7,13]},
    [
        { name: "Susan", type: "object"},
        { name: "Anthony", type: "object"}
    ],
    1,
    function () {
        return "arrays can contain function too";
    },
    "three"
];
console.log(arr1.concat([[5,6],4]));
const ar = [1,2,3,4,5,6,7];/*slice允许对当前字符串做修改，可以从任意以个下标增加和/或删除元素
这个方法的第一个参数是起始修改位置的数组下标；第二个参数是需要删除的元素个数（如果不想删除任何元素就传如0）
其他参数则是需要添加到数组中的元素*/
console.log(ar.splice(1,0,2,3,4),ar);
console.log(ar.splice(5,0,6),ar);
console.log(ar.splice(1,2),ar);
console.log(ar.splice(2,1,'a','b'),ar);
/*copyWithin函数将数组中一串有序的元素复制到数组的另一个位置，复制的同属回覆盖原来数组中的内容。
* 第一个参数表明目标位置，第二个参数表示从哪里开始复制，第三个参数表示复制到哪里结束
* 如arr.copuWithin(0,-3,-1)表示将下标为1，2的元素复制到下标为0，1的位置（-1的前一个位置为最后一个值）*/
const arr = [1,2,3,4];
console.log(arr.copyWithin(1,3));
console.log(arr.copyWithin(2,0,2));
console.log(arr.copyWithin(0,-3,-1));

/*fill可以将一个固定值赋给数组中的任意位置可以指定一个起始位置和结束位置*/
console.log(arr.fill("a"));
console.log(arr.fill("b",1));
console.log(arr.fill("c",2,3));
console.log(arr.fill(0,-3,-1));

/*reverse颠倒数组的顺序 sort对当前数组排序*/
const arr5 = [1,2,3,4,5];
console.log(arr5.reverse());
console.log(arr5.sort());
/*sort允许指定一个排序函数*/
const arr6 = [{name: "Suzanne"},{name: "Jim"},{name: "Trevor"},{name: "Amanda"}];
console.log(arr6.sort());
console.log(arr6.sort((a,b) => a.name > b.name));//升序
console.log(arr6.sort((a,b) => a.name[1]<b.name[1]));//降序

const arr7 = [1,5,"a",true,5,[1,2],"9"];
console.log(arr7.lastIndexOf(5,6));

//返回指定下标开始的方平数 find返回元素值 findIndex返回下标
const arr8 = [1,17,16,4,2,16,10,3,49];
console.log(arr8.find((x,i) => i>1 &&Number.isInteger(Math.sqrt(x))));

console.log('\u2665,\u2663,\u2666,\u2660');

//reduce 第一个参数表示累加值 第二个参数表示数组元素值，可以指定累加初始值（可选）
const words = ["Beachball","Rodeo","Angel","Aardvark",
    "Xylophone","November","Chocolate","Papaya","Uniform",
    "Joker","Colver","Bali"];
const alphabetical = words.reduce((a,x) => {
    if(!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a;
},{});
const longWords = words.reduce((a,w) => w.length > 6?a+=" "+w:a,"").trim();
console.log(alphabetical);
console.log(longWords);

//for...in
// /*for...in是枚举对象属性的传统方式 (不会出现键为符号的属性)*/
const SYM = Symbol();//符号类型
const o1 = {
    a:1,b:2,c:3,[SYM]: 4
};
for(let item in o1){
    if(!o1.hasOwnProperty(item))continue;
    console.log(`${item}: ${o1[item]}`);
}
//Object.keys
Object.keys(o1).forEach(prop => console.log(`${prop}: ${o1[prop]}`));
console.log('\n');
Object.keys(o1)
    .filter(prop => prop.match(/^a/))
    .forEach(prop => console.log(`${prop}: ${o1[prop]}`));

//面向对象编程
// class Car {
//     constructor(){
//
//     }
// }
// const car1 = new Car();
// const car2 = new Car();
// console.log(car1 instanceof Car);
// class Car {
//     constructor(make,model){
//         this.make = make;
//         this.model = model;
//         this.userGears = ['P','N','R','D'];
//         this.userGear = this.userGears[0];
//     }
//     shift(gear){
//         if(this.userGears.indexOf(gear)<0)
//             throw new Error(`Invalid gear: ${gear}`);
//         this.userGear = gear;
//     }
// }
// const car1 = new Car("Tesla","Model S");
// car1.shift('D');
// console.log(car1.make,car1.model,car1.userGear);
//动态属性
// class Car {
//     constructor(make,model){
//         this.make = make;
//         this.model = model;
//         this._userGears = ['P','N','R','D'];//穷人访问限制 给私有属性加下划线前缀
//         this._userGear = this._userGears[0];
//     }
//
//     get userGear(){ return this._userGear; }
//     set userGear(value){
//         if(this._userGears.indexOf(value)<0)
//             throw new Error(`Invalid gear: ${value}`);
//         this._userGear = value;
//     }
//     shift(gear){this.userGear = gear;}
// }/*并没有解决直接赋值问题*/
//WeakMap强制属性私有化
const Car = (function () {
    const carProps = new WeakMap();

    class Car {
        constructor(make,model){
            this.make = make;
            this.model = model;
            this._userGears = ['P','N','R','D'];
            carProps.set(this,{ userGear: this._userGears[0]});
        }

        get userGear(){ return carProps.get(this).userGear; }
        set userGear(value){
            if(this._userGears.indexOf(value)<0)
                throw new Error(`Invalid gear:${value}`);
            carProps.get(this).userGear = value;
        }

        shift(gear) { this.userGear = gear; }
    }
    return Car;
})();/*这里使用即时调用函数将WeakMap隐藏再一个闭包内，从而阻止了外界的访问。这个WeakMap可以安全的存储任何不像被Car类外部访问的属性*/

//原型
const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
car1.shift("D");
//car1.shift('d')报错
console.log(car1.userGear);
console.log(car1.shift === car2.shift);

car1.shift = function (gear) {
    this.userGear = gear.toUpperCase();
};
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift('d');
console.log(car1.userGear);

/*到目前为止，讨论的方法都是实例方法。它们只针对每个具体的实例才有用。还有一种静态方法，它不与实例绑定。在静态方法中
* ，this绑定的是类本身，但通常使用类名来代替this是公认的最佳实践。静态方法通常用来执行与类相关的任务，而非跟具体的实例
* 相关。*/
//静态方法
class Car1{
    static getNextVin(){
        return Car1.nextVin++;
    }
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.vin = Car1.getNextVin();
    }
    static areSimilar(car1, car2){
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame (car1, car2){
        return car1.vin === car2.vin;
    }
}
Car1.nextVin = 0;

const car3 = new Car1("Tesla","S");
const car4 = new Car1("Mazda","3");
const car5 = new Car1("Mazda","3");
console.log(car3.vin);
console.log(car4.vin);
console.log(car5.vin);
console.log(Car1.areSimilar(car3,car4));
console.log(Car1.areSimilar(car4,car5));
console.log(Car1.areSame(car4,car5));
console.log(Car1.areSame(car4,car4));
