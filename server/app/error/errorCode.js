

var errorType = {

    emptyRequest: { code: 'U1000', status: 400, message: 'Request body does not have data to process.' },
    emailIdNotExists: { code: 'U1001', status: 400, message: 'Email Id does not exists.' },
    invalidUserData: { code: 'U1002', status: 400, message: 'User data not found.' },
    dataNotFound:{ code: 'U1003', status: 400, message: 'Data not found.' },
    dataProcessingError:{ code: 'U1004', status: 500, message: 'Data processing error.' },
    dataFetchFound:{ code: 'U1005', status: 500, message: 'Error occurred during data fetch.' }
};

module.exports = errorType;


