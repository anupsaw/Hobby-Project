'use strict';

module.exports = {
    authenticate: authenticate
};

var userDataModel = requireFile('app/partials/user/signup/user.signup.model.js');
var handleError = requireFile('app/error/errorHandler.js');



function authenticate(req, res) {
    if (req.body.EmailId === undefined || req.body.EmailId === '') handleError(res, 400, 'Email Id is not provided');
    userDataModel.findOne({ 'EmailId': req.body.EmailId }, 'EmailId, Password', function (err, Data) {

        if (err) handleError(res, 500, err);
        if (Data) {
            var returnObj = Data.Password === req.body.Password ? true : false;
            res.send(returnObj);
        } else {
            handleError(res, 200, 'Email Id does not exists.');
        }

    });
}




