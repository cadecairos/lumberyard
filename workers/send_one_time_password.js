module.exports = function(mailer) {
  return function(data, cb) {
    mailer.sendOneTimePasswordEmail({
      to: data.email,
      username: data.username,
      token: data.token
    }, cb);
  };
};
