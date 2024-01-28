const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  //serializeUser: id만저장
  passport.serializeUser((user, done) => {
    done(null, user.id); //세션에 userId만 저장
  });

  //deserializeUser: user정보를 복구
  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
  kakao();
};
