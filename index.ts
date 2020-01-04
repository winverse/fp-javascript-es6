import path from 'path';
import glob from 'glob';

glob.sync('./src/**/*.ts').forEach(file => require(path.resolve(file)));
