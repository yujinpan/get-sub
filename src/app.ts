import express from 'express';

import { getSub } from './service';

const app = express();
const port = 9000;

app.set('trust proxy', true);

app.use(express.json());

app.post('/getSub', getSub);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
