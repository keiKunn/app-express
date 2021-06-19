const express = require('express')

module.exports = {
  doGetIndex: function (req, res) {
    res.render('index', {
      title: 'home',
      loginLink: { href: '/login', text: 'ログインページ' },
    })
  },
}
