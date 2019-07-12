'use strict'
const sentences =[
    {subject: 'JavaScript',verb:'is',object:'big'},
    {subject: 'Elephants',verb:'are',object:'small'},
];

//es6特性：对象解构
function say({subject,verb,object}) {
    //es6特性：模板字符串
    console.log(`${subject}  ${verb} ${object}`);
}
//es6特性：for..of
for(let s of sentences){
    say(s);
}
