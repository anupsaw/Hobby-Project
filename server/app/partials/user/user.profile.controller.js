module.exports = {
    updateUser: updateUser,
    getUserInfo: getUserInfo

};

var moduleName = 'user.profile.controller';
var userDataModel = requireFile('app/partials/user/user.signup.model.js');
var errHandler = requireFile('app/error/errorHandler.js')(moduleName);
var CustomError = errHandler.CustomError;
var errorType = errHandler.errorType;
var next;



function updateUser(req, res, next) {
    next = next;
    var id = req.params.id;
    userDataModel.findOne({ _id: id })
        .then(processData)
        .then(sendResponse)
        .catch(catchError);


    function processData(data) {
        if (!data) return catchError(errorType.dataNotFound);

        var hasData = buildModelObject(data, req.body);
        if (hasData) {
            return data.save();
        } else {
            return catchError(errorType.dataProcessingError);
        }

    }

    function sendResponse(resData) {
        res.send(resData);
    }


    function buildModelObject(schemObj, reqBody) {
        try {
            var hasValue = false;
            for (var prop in reqBody) {
                schemObj[prop] = reqBody[prop];
                hasValue = true;
            }
            return hasValue;
        }
        catch (err) {
            catchError(err);
        }
    }

}

function getUserInfo(req, res) {
    next = next;
    var id = req.params.id;
    userDataModel.findOne({ _id: id }, function (err, data) {
        if (!data) return catchError(errorType.dataFetchFound);

        if (data) {
            res.send(data);
        } else {
            return catchError(errorType.dataNotFound);
        }
    });

}


function catchError(err) {
    var errr = new CustomError(err);
    next(errr);
}





