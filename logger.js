// import EventEmitter from 'events'; //Dòng này là dòng khai báo của thằng ES6

const EventEmitter = require('events');

// const emitter = new EventEmitter();

//  var abc = emitter.on('mes' , (arg) => {
//     console.log('hello', arg)
// })

//  var qwe = emitter.emit('mes',{id: 2 , http: 'asdasdsad'})


class Logger extends EventEmitter {
    log(message)
    {
        console.log(message);

        this.on('mes', (e) =>
        {
            console.log('hello', e);
        })

        this.emit('mes' , {id: 1 , http: 'http://'});
    }

    
}


module.exports = Logger;
// module.exports = {
//     tao: abc /* emitter.on*/,//trong modules.exports hàm thì không có ()
//     xong: qwe,
// }