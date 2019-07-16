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
