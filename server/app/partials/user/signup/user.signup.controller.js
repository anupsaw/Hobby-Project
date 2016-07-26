'use strict';

var userDataModel = requireFile('app/partials/user/signup/user.signup.model.js');
var errHandler = requireFile('app/error/errorHandler.js');
var moduleName = 'user.signup.controller';

module.exports = {

    register: register,
    checkEmail: checkEmail
}


function register(req, res) {
    var hasValue;

    var User = new userDataModel();
    for (var prop in req.body) {
        User[prop] = req.body[prop];
        hasValue = true;
    }
    if (hasValue) {
        User.save(function (err, saveObj) {
            errHandler.checkForError(res, err, moduleName);
            res.send(saveObj);
        });
    } else {
        errHandler.bindAndSendErrResponse(res, 1000, 'Request body not found.', moduleName);
    }

}

function checkEmail(req, res) {

    userDataModel.findOne({ 'EmailId': req.body.EmailId }, function (err, foundEmail) {
        errHandler.checkForError(res, err, moduleName);
        foundEmail ? res.send(false) : res.send(true);

    });

}

function checkForError(res, err) {
    if (err) errHandler.handleError(res, 500, errHandler.bindErrorObject(err, ModuleName));
}

function bindAndSendErrResponse(res, code, msg) {
    var errObj = errorHandler.bindCustomErrorObject(code, msg, ModuleName);
    errorHandler.handleError(res, 400, errObj);
}