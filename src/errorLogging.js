const logging = app => {
  // console.log(app);

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
};

module.exports = logging;
