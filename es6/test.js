const sentences = [
    {subject: 'JavaScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'},
];

// es6特性对象解构
function say({subject, verb, object}) {
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
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwords += this.name[i]
            }
            return nameBackwords
        };
        console.log(`${getReverseName()} si eman ym , olleH`)
    }
};
o.greeBackwards();
// 闭包
let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function () {
        console.log(blockVar)
    }
}
globalFunc();
//闭包
let f;
{
    let o = {note: 'Safe'};
    f = function () {
        return o
    }
}
let oRef = f();
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
if (x !== 3) {
    console.log(y);
    y = 5;
    if (y === 5) {
        x = 3;
    }
    console.log(y);
}
if (x === 3) {
    console.log(y);
}
//使用var声明的变量，JavaScript不会关心它是否有重复声明
var x = 3;
if (x === 3) {
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
const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [arr1, arr2];
const arr4 = [
    {name: "Fred", type: "object", luckyNumber: [5, 7, 13]},
    [
        {name: "Susan", type: "object"},
        {name: "Anthony", type: "object"}
    ],
    1,
    function () {
        return "arrays can contain function too";
    },
    "three"
];
console.log(arr1.concat([[5, 6], 4]));
const ar = [1, 2, 3, 4, 5, 6, 7];/*slice允许对当前字符串做修改，可以从任意以个下标增加和/或删除元素
这个方法的第一个参数是起始修改位置的数组下标；第二个参数是需要删除的元素个数（如果不想删除任何元素就传如0）
其他参数则是需要添加到数组中的元素*/
console.log(ar.splice(1, 0, 2, 3, 4), ar);
console.log(ar.splice(5, 0, 6), ar);
console.log(ar.splice(1, 2), ar);
console.log(ar.splice(2, 1, 'a', 'b'), ar);
/*copyWithin函数将数组中一串有序的元素复制到数组的另一个位置，复制的同属回覆盖原来数组中的内容。
* 第一个参数表明目标位置，第二个参数表示从哪里开始复制，第三个参数表示复制到哪里结束
* 如arr.copuWithin(0,-3,-1)表示将下标为1，2的元素复制到下标为0，1的位置（-1的前一个位置为最后一个值）*/
const arr = [1, 2, 3, 4];
console.log(arr.copyWithin(1, 3));
console.log(arr.copyWithin(2, 0, 2));
console.log(arr.copyWithin(0, -3, -1));

/*fill可以将一个固定值赋给数组中的任意位置可以指定一个起始位置和结束位置*/
console.log(arr.fill("a"));
console.log(arr.fill("b", 1));
console.log(arr.fill("c", 2, 3));
console.log(arr.fill(0, -3, -1));

/*reverse颠倒数组的顺序 sort对当前数组排序*/
const arr5 = [1, 2, 3, 4, 5];
console.log(arr5.reverse());
console.log(arr5.sort());
/*sort允许指定一个排序函数*/
const arr6 = [{name: "Suzanne"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanda"}];
console.log(arr6.sort());
console.log(arr6.sort((a, b) => a.name > b.name));//升序
console.log(arr6.sort((a, b) => a.name[1] < b.name[1]));//降序

const arr7 = [1, 5, "a", true, 5, [1, 2], "9"];
console.log(arr7.lastIndexOf(5, 6));

//返回指定下标开始的方平数 find返回元素值 findIndex返回下标
const arr8 = [1, 17, 16, 4, 2, 16, 10, 3, 49];
console.log(arr8.find((x, i) => i > 1 && Number.isInteger(Math.sqrt(x))));

console.log('\u2665,\u2663,\u2666,\u2660');

//reduce 第一个参数表示累加值 第二个参数表示数组元素值，可以指定累加初始值（可选）
const words = ["Beachball", "Rodeo", "Angel", "Aardvark",
    "Xylophone", "November", "Chocolate", "Papaya", "Uniform",
    "Joker", "Colver", "Bali"];
const alphabetical = words.reduce((a, x) => {
    if (!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {});
const longWords = words.reduce((a, w) => w.length > 6 ? a += " " + w : a, "").trim();
console.log(alphabetical);
console.log(longWords);

//for...in
// /*for...in是枚举对象属性的传统方式 (不会出现键为符号的属性)*/
const SYM = Symbol();//符号类型
const o1 = {
    a: 1, b: 2, c: 3, [SYM]: 4
};
for (let item in o1) {
    if (!o1.hasOwnProperty(item)) continue;
    console.log(`${item}: ${o1[item]}`);
}
//Object.keys
Object.keys(o1).forEach(prop => console.log(`${prop}: ${o1[prop]}`));
console.log('\n');
Object.keys(o1)
    .filter(prop => prop.match(/^a/))
    .forEach(prop => console.log(`${prop}: ${o1[prop]}`));

// 面向对象编程
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
// 动态属性
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
// WeakMap强制属性私有化
const Car = (function () {
    const carProps = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, {userGear: this._userGears[0]});
        }

        get userGear() {
            return carProps.get(this).userGear;
        }

        set userGear(value) {
            if (this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear:${value}`);
            carProps.get(this).userGear = value;
        }

        shift(gear) {
            this.userGear = gear;
        }
    }

    return Car;
})();/*这里使用即时调用函数将WeakMap隐藏再一个闭包内，从而阻止了外界的访问。这个WeakMap可以安全的存储任何不
像被Car类外部访问的属性*/

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

/*到目前为止，讨论的方法都是实例方法。它们只针对每个具体的实例才有用。还有一种静态方法，它不与实例绑定。在静态
方法中，this绑定的是类本身，但通常使用类名来代替this是公认的最佳实践。静态方法通常用来执行与类相关的任务，而非
跟具体的实例相关。*/

//静态方法
class Car1 {
    static getNextVin() {
        return Car1.nextVin++;
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car1.getNextVin();
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }

    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }
}

Car1.nextVin = 0;

const car3 = new Car1("Tesla", "S");
const car4 = new Car1("Mazda", "3");
const car5 = new Car1("Mazda", "3");
console.log(car3.vin);
console.log(car4.vin);
console.log(car5.vin);
console.log(Car1.areSimilar(car3, car4));
console.log(Car1.areSimilar(car4, car5));
console.log(Car1.areSame(car4, car5));
console.log(Car1.areSame(car4, car4));
//继承
/*在分析原型的时候，已经看到了继承的身影：当创建一个类的实例时，它继承了类原型中的所有的功能。如果一个方法没
有在对象原型中找到其定义，它会检查原型的原型。这样就建立了一个原型链。JavaScript会沿着原型链走下去，直到某个
原型满足了需求。如果找不到这样的原型，程序最终会报错。原型链的最大好处就是能够建立类的层次结构。前面已经讨论
了汽车如何归属与一种交通工具。原型链允许将功能置于最合适的继承层次上。例如，汽车可能有个方法deployAirbags，
可以将它当作一般的交通工具方法，但是，大家做过配备安全气囊的船吗？另一方面，几乎左右的交通工具都可以搭载乘客，
所以交通工具都可能有addPassenger的方法。下面实现这种场景*/

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }

    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car2 extends Vehicle {
    constructor() {
        super();//特殊函数 调用了父类的构造器，必须调用否则报错
        console.log("Car created");
    }

    deployAirbags() {
        console.log("BWOOSH");
    }
}
Vehicle.prototype.sneaky = "not recommended!";
const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);
const c  = new Car2();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log("\n");
for(let p in c){
    console.log(`${p}: ${c[p]}`+
        (c.hasOwnProperty(p) ? '' : '(inherited)'));
}
console.log("\n");
console.log(c.passengers);
//v.deployAirbags()报错
c.deployAirbags();/*注意到可以在c上调用deployAirbags,但是不能在v上调用。*/

//map
const u1 = {name:'Cynthia'};
const u2 = {name:'Jackson'};
const u3 = {name:'James'};
// const userRoles = new Map();
// userRoles.set(u1,"User");
// userRoles.set(u2,"User");
// userRoles.set(u3,"Admin");
//set()链式赋值
//const userRoles = new Map();
// userRoles
//     .set(u1,"User")
//     .set(u2,"User")
//     .set(u3,"Admin");
//map的构函数赋值
const userRoles = new Map([
    [u1,'User'],
    [u2,'User'],
    [u3,'Admin']
]);
/*如果key已经在map种，调用set()后key对应的value就会被替换
* size属性返回map的元素个数
* keys()方法可以拿到map中的所有键，values()可以拿到所有的值
* entries()可以以数组的方式获取键值对，数组的第一个元素为键，第二个为值。所有的这些方法返回一个可
* 以迭代的对象从而可以用for...of循环迭代*/
for(let u of userRoles.keys())console.log(u.name);
for(let u of userRoles.values())console.log(u);;
for(let u of userRoles.entries())console.log(`${u[0].name}: ${u[1]}`);
//通过解构让迭代更自然
for(let [u,r] of userRoles.entries())console.log(`${u.name}: ${r}`);
//如果需要一个数组，可以用展开运算符：
console.log([...userRoles.values()]);
//使用delete()方法可以删除map中的一个条目
userRoles.delete(u2);
console.log(userRoles.size)
//如果想删除所有调用clear()方法
userRoles.clear();
console.log(userRoles.size);
//Weak maps
/*本质和Map相同除了以下几点
* key必须时对象
* WeakMap中的key可以被垃圾回收
* WeakMap不能被迭代或者清空*/
const SecretHolder = (function () {
    const secrets = new WeakMap();
    return class {
        setSecret(secret){
            secrets.set(this,secret);
        }
        getSecret(){
            return secrets.get(this);
        }
    }
})();
/*这里把WeakMap放在IIFE中，同时还放入了一个使用它的类。在IIFE外，有一个叫做SectetHolder的类，这个类的实例可
以存储secrets.secret的赋值和取值只能分别通过setSecret方法和getSecret方法完成*/
const a = new SecretHolder();
const b = new SecretHolder();
a.setSecret("secret A");
b.setSecret("secret B");
console.log(a.getSecret() + b.getSecret());
/*这里也可以使用普通的Map，但是这样回到是SecretHolder实例中的secret永远不会被垃圾回收*/

//Error对象
function validateEmail(email) {
    return email.match(/@/)?
        email:
        new Error(`invalid email: ${email}`);
}
const email = "jane@doe.com";
const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error){
    console.error(`Error: ${validatedEmail.message}`);
}else{
    console.log(`Valid email: ${validatedEmail}`);
}/*可以通过typeof运算符判断返回的是不是Error实例然后通过Error的message属性来获取错误信
息。虽然这样使用Error实例完全合法，也很有用，但实际上，它的大部分应用场景都在异常处理
中，这也是接下来要学的内容*/

//使用try...catch处理异常
/*如果将前面的例子中的email设为null、数字、对象等任何非字符串值时都会出错，此时程序将
* 会非常不友好的崩溃。为了防范这种非预期错误，可以将用于验证邮箱的代码封装在try..catch
* 语句中*/
const email_ = null;
try{
    const validatedEmail = validateEmail(email_);
    if(validatedEmail instanceof Error){
        console.error(`Error: ${validatedEmail.message}`);
    }else{
        console.log(`Valid email: ${validatedEmail}`);
    }
}catch (e) {
    console.log(`Error: ${e.message}`);
}/*捕获异常后，程序就不会再崩溃了，而是打印了错误日志后继续执行。不过可能还会有别的问题：
如果这里需要输入一个合法的邮箱，而用户输入了无效的邮箱，那程序继续运行下去也没有意义了。
注意，一旦有错误产生，执行逻辑立即跳到catch中。所以validateEmail调用语句后的if语句就不
会执行。也可以再try块中写入任何期望的语句，最先产生错误的语句会使执行逻辑跳转到catch块
中。如果try块中的语句没有任何错误，catch块中的代码就不会被执行，程序会继续运行下去。*/

//抛出异常
/*function  billPay(amount,payee,account) {
    if(amount > account.balance)
        throw new Error("insufficient funds");
    account.transfer(payee,amount);
}*/

//异常处理和调用栈
function a_() {
    console.log('a: calling b');
    b_();
    console.log('a: done');
}
function b_() {
    console.log("b: calling c");
    c_();
    console.log("b: done");
}
function c_() {
    console.log("c: throwing error");
    throw new Error('c error');
    console.log('c: done');
}
function d_() {
    console.log('d: calling c');
    c_();
    console.log('d: done');
}
try{
    a_();
}catch (e) {
    console.log(e.stack);
}
try{
    d_();
}catch (e) {
    console.log(e.stack);
}/*栈轨迹从最深层的函数开始，直到没有函数调用。所以出现异常应该从最上面开始解决*/
//try...catch...finally
try{
    console.log("this line is executed...");
    throw new Error("whoops");
    console.log("whis line is not...");
}catch (e) {
    console.log("there was an error..");
}finally {
    console.log("...always executed");
    console.log("perform cleanup here");
}

//迭代器和生成器
const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!"
];
console.log("\n");
const it = book.values();//values（）方法获取迭代器
for(let i=it.next();!i.done;i=it.next()){
    console.log(i.value);
}
//迭代协议
/*迭代器协议可以让任何对象变得可迭代
* 如果一个类提供了一个符号方法Symbol.iterator，这个方法返回一个具有迭代行为
* 的对象（比如：对象有next()方法，同时next方法返回一个包含value和done的对象
* ），那么这个类就是可迭代的*/
class Log{
   constructor(){
       this.messages = [];
   }
   add(message){
       this.messages.push({message,timestamp: Date.now()});
   }
   [Symbol.iterator](){
       return this.messages.values();
   }
}
const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");
for(let i of log){
    console.log(`${i.message} @ ${i.timestamp}`);
}
//可以编写自己的迭代器
class Log2{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({message,timestamp: Date.now()});
    }
    [Symbol.iterator](){
        const messages = this.messages;
        let i =0;
        return {
            next(){
                if(i>=messages.length)
                    return {value: undefined, done: true};
                else
                    return {value: messages[i++],done: false};
            }
        }
    }
}
console.log("\n");
const log2 = new Log2();
log2.add("first day at sea");
log2.add("spotted whale");
log2.add("spotted another vessel");
for(let i of log2){
    console.log(`${i.message} @ ${i.timestamp}`);
}
/*至此，以上使用的例子都是迭代预先定义好元素个数的数组：一本书的页数，或者log中
* 的日期消息记录。迭代器还可以用来表示含有无穷值的对象。*/
class FibonacciSequence {
    [Symbol.iterator](){
        let a = 0, b = 1;
        return {
            next(){
                let temp = b;
                b+=a;
                a=temp;
                return {value: temp,done: false};
            }
        };
    }
}
const fib = new FibonacciSequence();
let i = 0;
for(let n of fib){
    console.log(n);
    if(++i>9)break;
}
//生成器(先鸽了以后补上)
