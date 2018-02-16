import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Bundler from 'parcel-bundler';

import router from './router';

// Express setup
const app = express();

// use parcel bundler
if (process.env.NODE_ENV !== 'production') {
  const bundler = new Bundler('./src/containers/app.jsx', {
    outDir: `${__dirname}/../public`,
  });
  bundler.bundle();
  app.use(bundler.middleware());
}

// logger
app.use(logger('dev'));
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());

// serve static files from 'public'
app.use(express.static(`${__dirname}/../public`));

// use routes
app.use(router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
export default app;
