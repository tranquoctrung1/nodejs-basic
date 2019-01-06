const http = require('http');

// import Looger from './logger';//Theo mình nghỉ thì node không áp dụng cách khai báo của ES6
//Nhưng mà từ thằng Angular nó lại dùng cách khai báo này
// Nói chung thì 2 thằng như nhau hiểu là được
const Logger = require ('./logger')
const logger = new Logger();

// Logger.tao
// Logger.xong

const routes = require('./routes')


logger.log('trung');

console.log(routes.someText);

const server = http.createServer(routes.handler)


server.on('connection', (socket) =>
{
    console.log('New Conection......')
})

server.listen(3000);