const express = require('express')

module.exports = {
  doGetLogin: function (req, res) {
    res.render('login', { title: 'login' })
  },
}