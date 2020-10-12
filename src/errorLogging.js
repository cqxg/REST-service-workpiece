const logging = app => {
  // console.log(app);

  app.use(err => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = logging;
