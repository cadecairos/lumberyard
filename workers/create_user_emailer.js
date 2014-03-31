module.exports = function(mailer) {
  return function(data, cb) {
    mailer.sendWelcomeEmail({
      fullName: data.username,
      to: data.email
    }, cb);
  };
};