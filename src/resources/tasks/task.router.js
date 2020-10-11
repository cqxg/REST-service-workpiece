const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await taskService.getAll(req.params.boardId);
  res.json(tasks.map(Task.toResponse));
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  try {
    const task = await taskService.getOne(
      req.params.boardId,
      req.params.taskId
    );
    res.json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = {
    ...req.body,
    id: req.params.taskId,
    boardId: req.params.boardId
  };
  const isUpdated = await taskService.update(task);
  if (isUpdated) {
    res.status(200).send(Task.toResponse(task));
  } else {
    res.sendStatus(400);
  }
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = new Task({ ...req.body, boardId: req.params.boardId });
  await taskService.create(task);
  res.json(Task.toResponse(task));
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const task = await taskService.remove(req.params.boardId, req.params.taskId);
  if (task) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
