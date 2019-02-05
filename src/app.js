const Koa = require('koa');
const app = new Koa();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../env/.env') });
const port = process.env.PORT || 3004;

app.use(async (ctx, next) => {
    ctx.body = 'hello world';
    console.log(1);
    await next();
    console.log(3);
});

app.use((ctx, next) => {
    console.log(2);
    next();
});

app.listen(port, () => {
    console.log(`current port is ${port}`);
});
