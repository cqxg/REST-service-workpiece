const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardService.getOne(req.params.id);
    res.json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').put(async (req, res) => {
  const board = {
    ...req.body,
    id: req.params.id
  };
  const isUpdated = await boardService.update(board);
  if (isUpdated) {
    res.status(200).send(Board.toResponse(board));
  } else {
    res.sendStatus(400);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(new Board(req.body));
  res.json(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardService.remove(req.params.id);
  if (board) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
