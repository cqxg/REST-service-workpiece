const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getOne(req.params.id);
    res.json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').put(async (req, res) => {
  const user = {
    ...req.body,
    id: req.params.id
  };
  const isUpdated = await usersService.update(user);
  if (isUpdated) {
    res.status(200).send(User.toResponse(user));
  } else {
    res.sendStatus(400);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      login: req.body.login,
      password: req.body.password,
      name: req.body.name
    })
  );
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.remove(req.params.id);
  if (user) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
