angular.module('as-ui')
    .directive('asEditField', function ($timeout) {

        return {
            restrict: 'C',
            require: ['?^asInput', '?^asSelect'],
            link: function (scope, element, attr, ctrl) {
                var Ctrl;
                var type;
                ctrl.forEach(function (item, index) {
                    if (item !== null) {
                        Ctrl = item;
                        type = index;
                    }
                })

                $(element).on('click', 'a.as-edit', function () {
                    allowEditing(Ctrl, element)
                });
                $(element).on('click', 'a.as-undo', function () {
                    allowEditing(Ctrl, element)
                });

                function allowEditing(Ctrl, element) {
                    scope.$apply(function () {
                        Ctrl.isEdit = Ctrl.isEdit ? false : true;
                    });

                    if (type === 0) {
                        setFocus(element);
                    } else if (type === 1) {
                        updateSelect(element);
                    }

                }

                function updateSelect(element) {
                    var select = element.find('select');
                    $(select).material_select('destroy');
                    $(select).material_select();
                }

                function setFocus(element) {
                    var input = element.find('input');
                    $(input).focus();
                }
            }
        }
    })
