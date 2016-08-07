module.exports = {
    authenticate: authenticate
};

var moduleName = 'user.login.controller';
var userDataModel = requireFile('app/partials/user/user.signup.model.js');
var errHandler = requireFile('app/error/errorHandler.js')(moduleName);
var CustomError = errHandler.CustomError;
var errorType = errHandler.errorType;




function authenticate(req, res, next) {

    if (req.body.EmailId === undefined || req.body.EmailId === '') {
        return catchError(errorType.emailIdNotExists, next);
    }


    try {
        var Promise = userDataModel.findOne({ 'EmailId': req.body.EmailId });
        Promise
            .then(sendUserData)
            .catch(catchError);
    }
    catch (err) {
        return catchError(err, next);
    }

    function sendUserData(userData) {
        if (userData) {
            // if (Data.Password === req.body.Password) res.send(UserData);  //password not authenticated 
            res.send(userData);
        } else {
            return catchError(errorType.dataNotFound);
        }
    }


    function catchError(err) {
        var errr = new CustomError(err);
        next(errr);
    }

}






