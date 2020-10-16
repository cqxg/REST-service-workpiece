const { finished } = require('stream');

const logging = app => {
  app.use((req, res, next) => {
    const { statusCode } = res;
    const { method, url } = req;
    const start = Date.now();

    finished(res, () => {
      const ms = Date.now() - start;
      console.log(`${method} ${url} ${statusCode} [${ms}ms]`);
    });

    next();
  });

  app.use((err, req, res, next) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    next(err);
  });

  process.on('uncaughtException', err => {
    console.log(`Caught exception: ${err}`);
  });

  process.on('unhandledRejection', reason => {
    console.log(`Unhandled rejection detected: ${reason.message}`);
  });
};

module.exports = logging;
