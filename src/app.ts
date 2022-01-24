import * as express from 'express';
import * as morgan from 'morgan';

const app: express.Application = express();

app.use(morgan('dev'));

app.get('/ping', (req: express.Request, res: express.Response) => {
  res.send('pong');
});

export default app;
