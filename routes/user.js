const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

/* GET ALL Users */
router.get('/',  (req, res, next) => {
  User.find( (err, products) => {
    if (err) return next(err);
    res.json(products)
  })
});

/* GET SINGLE User BY ID */
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post)
  })
});

/* SAVE User */
router.post('/', (req, res, next) => {
  User.create(req.body, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
});

/* UPDATE User */
router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post)
  })
});

/* DELETE User */
router.delete('/:id', (req, res, next) => {
  User.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post)
  })
});

module.exports = router;
