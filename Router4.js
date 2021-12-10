const express = require('express');
const router = express.Router();

router.get('/image', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Ваши картинки')
  })
  module.exports=router;
