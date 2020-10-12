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
};

module.exports = logging;
