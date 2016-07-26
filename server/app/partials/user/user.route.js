

// This will work as routing for this application
var express = require('express');
var router = express.Router();

var login = requireFile('app/partials/user/login/user.login.controller.js');
var signup = requireFile('app/partials/user/signup/user.signup.controller.js');


//function useRouter() {
router.use(function (req, res, next) {
    console.log('I am here in user.route.js page');
    next();
});

router.route('/')
    .get(function (req, res) {
        console.log(req);
        res.send('user.get');
    })


router.route('/login')
    .post(login.authenticate);

router.route('/signup')
    .post(signup.register);

router.route('/signup/checkemail')
    .post(signup.checkEmail);



// return router
//}
module.exports = router;