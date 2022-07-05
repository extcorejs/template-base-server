#!/usr/bin/env ts-node
import * as path from 'path';
import { DocGenerator } from '@extcore/server/dist/tools';

const docGenerator = new DocGenerator({
  handlerPath: path.join(__dirname, '../src/http/handlers'),
  docPath: path.join(__dirname, '../.swagger'),
  projectRoot: path.join(__dirname, '../'),
});

docGenerator.generate();

console.log('DONE!');
