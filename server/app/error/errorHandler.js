'user strict';


module.exports = {
    handleError: handleError,
    checkForError: checkForError,
    bindAndSendErrResponse: bindAndSendErrResponse
}


function handleError(resObj, statusCode, errorObj) {
    console.log(errorObj);
    resObj.status(statusCode).send(errorObj)

}


function bindErrorObject(err, modulename) {
    err.modulename = modulename;
    return new ErrorObject(err);
}

function bindCustomErrorObject(code, errMsg, modulename) {
    return new ErrorObject({ code: code, errMsg: errMsg, modulename: modulename })
}

function ErrorObject(err) {
    this.code = err.code;
    this.errmsg = err.errmsg;
    this.name = err.name || 'application';
    this.modulename = err.modulename;
    this.timestamp = Date.now();
}

function checkForError(res, err,modulename) {
    if (err) handleError(res, 409, bindErrorObject(err, modulename));
}

function bindAndSendErrResponse(res, code, msg, modulename) {
    var errObj = bindCustomErrorObject(code, msg, modulename);
    handleError(res, 400, errObj);
}


