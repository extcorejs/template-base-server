import path from 'path';
import { createServer } from '@extcore/server';
import { getSwaggerDocument } from './swagger';

const server = createServer({
  port: 3030,
  rootPath: path.join(__dirname, '../'),
  handlersPath: path.join(__dirname, 'http/handlers'),
  swaggerDoc: getSwaggerDocument(),
});

server.setLogger({
  level: 'warn',
});

server.start();
