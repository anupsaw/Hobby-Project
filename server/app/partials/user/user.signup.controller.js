var userDataModel = requireFile('app/partials/user/user.signup.model.js');
var errHandler = requireFile('app/error/errorHandler.js');
var moduleName = 'user.signup.controller';

module.exports = {
    registerUser: registerUser,
    checkEmail: checkEmail,
    getUserModel:getUserModel
};


function registerUser(req, res) {
    var hasValue;

    var User = new userDataModel();

    hasValue = buildModelObject(User, req.body);
    // for (var prop in req.body) {
    //     User[prop] = req.body[prop];
    //     hasValue = true;
    // }
    if (hasValue) {
        User.save(function (err, saveObj) {
            if (err) {
                errHandler.checkForError(res, err, moduleName);
            } else {
                res.send(saveObj);
            }
        });
    } else {
        errHandler.bindAndSendErrResponse(res, 'A1000', moduleName);
    }

}



function checkEmail(req, res) {
    userDataModel.findOne({ 'EmailId': req.body.EmailId }, function (err, foundEmail) {
        if (err) {
            errHandler.checkForError(res, err, moduleName);
        } else {
            var returnObj = foundEmail ? false : true;
            res.send(returnObj);
        }
    });

}

function getUserModel(req, res) {
    res.send(userDataModel.schema.tree);
}


function buildModelObject(schemObj, reqBody) {

    var hasValue = false;
    for (var prop in reqBody) {
        schemObj[prop] = reqBody[prop];
        hasValue = true;
    }
    return hasValue;
}
