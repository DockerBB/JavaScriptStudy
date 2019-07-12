'use strict'
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' }
]

// es6特性对象解构
function say ({ subject, verb, object }) {
    // es6特性：模板字符串
    console.log(`${subject}  ${verb} ${object}`)
}
    // es6特性：for..of
for (const s of sentences) {
    say(s)
}
