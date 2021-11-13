import fs from 'fs';
import path from 'path';
import baseDocument from './doc/baseDocument';
import customPaths from './doc/customPaths';
import customDefinitions from './doc/customDefinitions';

const docFolder = path.join(__dirname, '../../.swagger');

const getGeneratedPaths = (): Record<string, unknown> => {
  try {
    const data = fs.readFileSync(path.join(docFolder, 'paths.json'));
    return data ? JSON.parse(data.toString()) : {};
  } catch {
    return {};
  }
};

const getGeneratedDefinitions = (): Record<string, unknown> => {
  try {
    const data = fs.readFileSync(path.join(docFolder, 'definitions.json'));
    return data ? JSON.parse(data.toString()) : {};
  } catch {
    return {};
  }
};

export const getSwaggerDocument = (): Record<string, unknown> => {
  return {
    ...baseDocument,
    paths: {
      ...getGeneratedPaths(),
      ...customPaths,
    },
    definitions: {
      ...getGeneratedDefinitions(),
      ...customDefinitions,
    },
  };
};
