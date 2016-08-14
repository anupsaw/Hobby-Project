(function () {
    'use strict';

    angular.module('MovieApp')
        .controller('securityquestionsCtrl', ['dataService', function (dataService) {

            var vm = this;

            vm.Authenticate = Authenticate;

            vm.formBtn = [{
                type:'button',
                actionType:'save',
                displayText:'Save',
                callback:'onSave'
            },
            {
                type:'button',
                actionType:'cancel',
                displayText:'Cancel',
                callback:'onCancle'
            }];
            vm.formData = [
                {
                    type: 'select',
                    name: 'Question1', //element name as well as model name
                    attr: {
                        type: '',
                        key: 'Question1', // this would be id
                        label: 'Security Question 1',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: false, //optional
                        disabled: false, //optional
                    },
                    select: {
                        options:
                        [
                            { code: 'q1', value: 'who is you best friend?' },
                            { code: 'q2', value: 'What is your dream?' },
                            { code: 'q3', value: 'Where is your birth place?' }
                        ]
                    }

                }, {
                    type: 'input',
                    name: 'Q1Answer',
                    attr: {
                        type: 'text',
                        key: 'Q1Answer', // this would be id
                        label: 'Please enter an answer',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                    }

                }, {
                    type: 'select',
                    name: 'Question2', //element name as well as model name
                    attr: {
                        type: '',
                        key: 'Question2', // this would be id
                        label: 'Security Question 2',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                    },
                    select: {
                        options:
                        [
                            { code: 'q1', value: 'who is you best friend?' },
                            { code: 'q2', value: 'What is your dream?' },
                            { code: 'q3', value: 'Where is your birth place?' }
                        ]
                    }

                }, {
                    type: 'input',
                    name: 'Q2Answer', //element name as well as model name
                    attr: {
                        type: 'text',
                        key: 'Q2Answer', // this would be id
                        label: 'Please enter an answer',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                    }

                }, {
                    type: 'select',
                    name: 'Question3', //element name as well as model name
                    attr: {
                        type: '',
                        key: 'Question3', // this would be id
                        label: 'Security Question 3',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                    },
                    select: {
                        options:
                        [
                            { code: 'q1', value: 'who is you best friend?' },
                            { code: 'q2', value: 'What is your dream?' },
                            { code: 'q3', value: 'Where is your birth place?' }
                        ]
                    }

                }, {
                    type: 'input',
                    name: 'Q3Answer', //element name as well as model name
                    attr: {
                        type: 'text',
                        key: 'Q3Answer', // this would be id
                        label: 'Please enter an answer',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                    }

                }
            ];

            function Authenticate() {

                dataService.Post(vm.userModelData).then(LoginUser);
            }




            function LoginUser(data) {

                if (data.data === true) {
                    alert('login Successful');
                } else {
                    alert(data.data);
                }

            }

        }]);

})();