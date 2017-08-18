import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackhotmiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vote');

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler,{
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackhotmiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
