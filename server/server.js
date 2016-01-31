import HapiReactViews from 'hapi-react-views'
import Vision from 'vision';
import Webpack from 'webpack';
import WebpackPlugin from 'hapi-webpack-plugin';
import {Server} from 'hapi';

import webpackOptions from '../webpack.config';

const compiler = new Webpack(webpackOptions);
const assets = {noInfo: true};

const server = new Server();
server.connection({
  host: 'localhost',
  port: 8080
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => reply.view('index')
});

server.route({
  method: 'GET',
  path: '/partsMisc',
  handler: (request, reply) => reply.response(require('./json/partsMisc.json'))
});

server.register(Vision, err => {

  if (err) {
    console.error('Failed to load');
  }

  server.views({
    engines: {
      js: HapiReactViews
    },
    relativeTo: __dirname,
    compileOptions: {
      useNodeJsx: false
    },
    path: '.'
  });

});

server.register({
  register: WebpackPlugin,
  options: {
    compiler,
    assets
  }
}, () => {

  server.start();

});
