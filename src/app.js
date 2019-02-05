const Koa = require('koa');
const app = new Koa();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../env/.env') });
const port = process.env.PORT || 3004;

app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(port, () => {
    console.log(`current port is ${port}`);
});
