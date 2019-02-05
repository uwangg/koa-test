const Koa = require('koa');
const app = new Koa();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../env/.env') });

app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(process.env.PORT || 3004, () => {
    console.log(path.resolve(__dirname, './env/.env'));
    console.log(`current port is ${process.env.PORT}`);
});
