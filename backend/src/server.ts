import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadCOnfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadCOnfig.directory));
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started on port 3333!');
});
