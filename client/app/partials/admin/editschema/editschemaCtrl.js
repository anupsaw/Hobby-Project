(function () {
    'use strict';

    angular.module('MovieApp')
        .controller('editschemaCtrl', function () {
            var vm = this;
            vm.title = 'Add Schema';
            vm.ShowToast = function () {
                Materialize.toast('soon we will guid you. Thanks for showing interest.', 4000);
            };
            vm.type = "1";
            vm.title = "Edit Schema";



             vm.pageSchema = [
                {
                    type: 'select',
                    name: 'element', //element name as well as model name
                    attr: {
                        type: '',
                        key: 'element', // this would be id
                        label: 'Please choose an element',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true, //optional
                        disabled: false, //optional
                    },
                    select: {
                        options:
                        [
                            { code: 'select', value: 'select' },
                            { code: 'input', value: 'input' }
                        ]
                    }

                }, {
                    type: 'select',
                    name: 'type', //element name as well as model name
                    attr: {
                        type: '',
                        key: 'type', // this would be id
                        label: 'Please choose an element type',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    },
                    select: {
                        options:
                        [
                            { code: 'text', value: 'text' },
                            { code: 'email', value: 'email' },
                            { code: 'date', value: 'date' },
                            { code: 'checkbox', value: 'checkbox' }
                        ]
                    }

                }, {
                    type: 'input',
                    name: 'modelName',
                    attr: {
                        type: 'text',
                        key: 'modelName', // this would be id
                        label: 'Please enter field Model Name',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    }

                }, {
                    type: 'input',
                    name: 'key', //element name as well as model name
                    attr: {
                        type: 'text',
                        key: 'key', // this would be id
                        label: 'Please enter field id name',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    }

                }, {
                    type: 'input',
                    name: 'label', //element name as well as model name
                    attr: {
                        type: 'text',
                        key: 'label', // this would be id
                        label: 'Please enter field label name',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    }

                }, {
                    type: 'input',
                    name: 'class', //element name as well as model name
                    attr: {
                        type: 'text',
                        key: 'class', // this would be id
                        label: 'Please enter one or more class name to apply on field',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    }

                }, {
                    type: 'input',
                    name: 'required', //element name as well as model name
                    attr: {
                        type: 'checkbox',
                        key: 'required', // this would be id
                        label: 'Is this field required?',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    }

                }, {
                    type: 'input',
                    name: 'editable', //element name as well as model name
                    attr: {
                        type: 'checkbox',
                        key: 'editable', // this would be id
                        label: 'Is this field editable?',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    }

                }, {
                    type: 'input',
                    name: 'disabled', //element name as well as model name
                    attr: {
                        type: 'checkbox',
                        key: 'disabled', // this would be id
                        label: 'Is this field should be disabled during load?',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true,
                    }

                }

            ];

        });


})();