var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');

dust.loadSource(dust.compile(require('./template'), 'advertising-home'));

module.exports = function (sandbox, options, done) {
    dust.render('advertising-home', {}, function (err, out) {
        if (err) {
            return done(err);
        }
        sandbox.append(out);
        done(null, function () {
            $('.advertising-home', sandbox).remove();
        });
    });
};
