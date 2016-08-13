angular.module('as-ui').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('framework_components/directives/as-ui/as-input/as-input.tpl.html',
    "<div class=row>\r" +
    "\n" +
    "    <div class=input-field>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix as-edit\" ng-if=field.config.editable toggal-edit-access=true></a>\r" +
    "\n" +
    "        <input type={{::field.attr.type}} class=validate ng-disabled=field.config.disabled id={{::field.attr.key}} ng-model=model[field.name] ng-required=field.config.required>\r" +
    "\n" +
    "        <label for={{::field.attr.key}}>{{::field.attr.label}}</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

}]);
