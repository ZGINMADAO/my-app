// function* demo() {
//     const one = yield 1;
//     console.log('one');
//     const two = yield 2;
//     console.log('two');
// }
// console.log('index Demo begin');
// const fun = demo();
// console.log(fun.next());
// console.log(fun.next());
// // fun.next();
// console.log('indexDemoEnd');

let love = new Promise((resolve, reject) => {
    setTimeout(() => {         //开始谈恋爱，不过恋爱的结果要以后才知道
        resolve('marry')    //恋爱成功，决定结婚

    }, 500)
})
love.then(function (value) {
    console.log(value);
    return '123'
}).then(function (value) {
    console.log(value);
})

