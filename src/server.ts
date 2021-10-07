import compression from 'compression';
import express from 'express';
import sirv from 'sirv';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express().use('/resume',
              compression({ threshold: 0 }),
              sirv('static', { dev }),
              sapper.middleware()
).listen(PORT);
