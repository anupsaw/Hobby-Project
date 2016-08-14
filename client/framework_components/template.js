angular.module('as-ui').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('framework_components/directives/as-ui/as-buttons/as-buttons.tpl.html',
    "<div class=row>\r" +
    "\n" +
    "    <div class=input-field>\r" +
    "\n" +
    "        <span ng-repeat=\"btn in formCtrl.actions\">\r" +
    "\n" +
    "        <button ng-if=\"btn.type == 'submit' && btn.actionType == 'save'\" type=submit class=\"waves-effect waves-white btn as-btn-red\" ng-click=formCtrl.save();>{{btn.displayText}}</button>\r" +
    "\n" +
    "        <button ng-if=\"btn.type == 'submit' && btn.actionType == 'cancel'\" type=submit class=\"waves-effect waves-black btn-flat as-btn-blank\" ng-click=formCtrl.cancel();>{{btn.displayText}}</button>\r" +
    "\n" +
    "        <button ng-if=\"btn.type == 'button' && btn.actionType == 'save'\" class=\"waves-effect waves-white btn as-btn-red\" ng-click=formCtrl.save();>{{btn.displayText}}</button>\r" +
    "\n" +
    "        <button ng-if=\"btn.type == 'button' && btn.actionType == 'cancel'\" class=\"waves-effect waves-black btn-flat as-btn-blank\" ng-click=formCtrl.cancel();>{{btn.displayText}}</button>\r" +
    "\n" +
    "        <span ng-if=\"btn.type == 'link' && btn.actionType == 'nav'\">{{btn.displayinfo}}<a href=# ui-sref={{btn.function}}> {{btn.displayText}}</a></span>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('framework_components/directives/as-ui/as-input/as-input.tpl.html',
    "<div class=row>\r" +
    "\n" +
    "    <div class=\"input-field as-edit-field\" ng-if=field.config.editable>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active\" ng-class=\"{'as-edit':!asInputCtrl.isEdit, 'as-undo':asInputCtrl.isEdit}\"></a>\r" +
    "\n" +
    "        <input type={{::field.attr.type}} ng-disabled=\"(field.config.disabled || field.config.editable) && !asInputCtrl.isEdit\" id={{::field.attr.key}} ng-model=model[field.name] ng-required=field.config.required>\r" +
    "\n" +
    "        <label for={{::field.attr.key}}>{{::field.attr.label}}</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=input-field ng-if=!field.config.editable>\r" +
    "\n" +
    "        <input type={{::field.attr.type}} ng-disabled=field.config.disabled id={{::field.attr.key}} ng-model=model[field.name] ng-required=field.config.required>\r" +
    "\n" +
    "        <label for={{::field.attr.key}}>{{::field.attr.label}}</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('framework_components/directives/as-ui/as-select/as-select.tpl.html',
    "<div class=row>\r" +
    "\n" +
    "  <div class=\"input-field as-edit-field\" ng-if=field.config.editable>\r" +
    "\n" +
    "      <a href=\"\" class=\"prefix active\" ng-class=\"{'as-edit':!asSelectCtrl.isEdit, 'as-undo':asSelectCtrl.isEdit}\"></a>\r" +
    "\n" +
    "    <select ng-options=\"option.code as option.value for option in field.select.options track by option.code\" ng-disabled=\"(field.config.disabled || field.config.editable) && !asSelectCtrl.isEdit\" id={{::field.attr.key}} ng-model=model[field.name] ng-required=field.config.required>\r" +
    "\n" +
    "      <option value=\"\" disabled selected>Choose your option</option>\r" +
    "\n" +
    "    </select>\r" +
    "\n" +
    "    <label for={{::field.attr.key}}>{{::field.attr.label}}</label>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=input-field ng-if=!field.config.editable>\r" +
    "\n" +
    "    <select ng-disabled=\"field.config.disabled \" id={{::field.attr.key}} ng-options=\"option.code as option.value for option in field.select.options track by option.code\" ng-model=model[field.name] ng-required=field.config.required>\r" +
    "\n" +
    "      <option value=\"\" disabled selected>Choose your option</option>\r" +
    "\n" +
    "    </select>\r" +
    "\n" +
    "    <label for={{::field.attr.key}}>{{::field.attr.label}}</label>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
