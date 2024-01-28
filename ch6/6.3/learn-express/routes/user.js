const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

router.post('/', (req, res) => {
  res.send('Post, User');
});
module.exports = router;
