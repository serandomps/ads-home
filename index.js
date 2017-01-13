var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');

dust.loadSource(dust.compile(require('./template'), 'advertising-home'));

module.exports = function (sandbox, fn, options) {
    dust.render('advertising-home', {}, function (err, out) {
        if (err) {
            return;
        }
        sandbox.append(out);
        fn(false, function () {
            $('.advertising-home', sandbox).remove();
        });
    });
};
