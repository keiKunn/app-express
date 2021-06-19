const express = require('express')

module.exports = {
  doGetRegistUser: function (req, res) {
    res.render('registUser', { title: 'ユーザ登録', loginLink: { href: '/login', text: 'ログインページ' } })
  },
}
