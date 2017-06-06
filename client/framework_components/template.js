angular.module('as-ui').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('as-common/as-cards/as-cards.tpl.html',
    "<div class=\"col s12\" ng-class=\"{'m6': formType =='0', 'm12': (formType =='1' || formType =='2')}\">\r" +
    "\n" +
    "    <div class=card>\r" +
    "\n" +
    "        <div class=\"card-content black-text\">\r" +
    "\n" +
    "            <div class=card-title>\r" +
    "\n" +
    "                <span>{{formTitle}}</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "                <ng-transclude></ng-transclude>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('as-common/as-container/asContainer.tpl.html',
    "<header>\r" +
    "\n" +
    "    <nav>\r" +
    "\n" +
    "        <div class=nav-wrapper>\r" +
    "\n" +
    "            <div class=container>\r" +
    "\n" +
    "                <a href=#! ui-sref=home style=color:grey class=\"brand-logo as-logo\">e-LOCKER</a>\r" +
    "\n" +
    "                <a href=# ui-sref=home data-activates=as-side-nav class=button-collapse><i class=material-icons>menu</i></a>\r" +
    "\n" +
    "                <ul class=\"right hide-on-med-and-down\" ng-if=!isLogedIn>\r" +
    "\n" +
    "                    <li><a href=# class=\"waves-effect waves-black btn-flat as-btn-blank\" ui-sref=user.signup>Sign up</a></li>\r" +
    "\n" +
    "                    <li><a href=# class=\"waves-effect waves-white btn as-btn-red\" ui-sref=user.login>Log in</a></li>\r" +
    "\n" +
    "                    <li><a href=# class=\"waves-effect waves-white btn as-btn-red\" ui-sref=admin>admin</a></li>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <ul class=\"right hide-on-med-and-down\" ng-if=isLogedIn>\r" +
    "\n" +
    "                    <li><a href=# class=\"waves-effect waves-black btn-flat as-btn-blank\" ui-sref=user.signup>Sign up</a></li>\r" +
    "\n" +
    "                    <li><a href=# class=\"waves-effect waves-white btn as-btn-red\" ui-sref=user.login>Log in</a></li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <ul class=side-nav id=as-side-nav>\r" +
    "\n" +
    "                    <li style=\"height:40px; background-color:#ee6e73\"><a href=#! class=brand-logo>My App</a></li>\r" +
    "\n" +
    "                    <li><a href=# class=as-user ui-sref=user.login>Log in</a></li>\r" +
    "\n" +
    "                    <li><a href=# class=as-user ui-sref=user.signup>Sign up</a></li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </nav>\r" +
    "\n" +
    "</header>\r" +
    "\n" +
    "<main>\r" +
    "\n" +
    "<div id=mainContent class=container>\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <ui-view></ui-view>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</main>\r" +
    "\n" +
    "<footer class=page-footer>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=footer-copyright>\r" +
    "\n" +
    "        <div class=container>\r" +
    "\n" +
    "            © 2016 Copyright Text\r" +
    "\n" +
    "            <a class=\"grey-text text-lighten-4 right\" href=#!>More Links</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</footer>\r" +
    "\n" +
    "<ng-transclude></ng-transclude>"
  );


  $templateCache.put('as-config-ui/views/as-input-config.tpl.html',
    "<div class=\"col m12 s12\">\r" +
    "\n" +
    "    <div class=input-field>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-edit-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-undo-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-delete-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-save-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <input type={{::uiConfigCtrl.fields.attr.type}} disabled id={{::uiConfigCtrl.fields.attr.key}}/ >\r" +
    "\n" +
    "        <label for={{::uiConfigCtrl.fields.attr.key}}>{{::field.fields.attr.label}}</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('as-config-ui/views/as-select-config.tpl.html',
    "<div class=\"col m12 s12\">\r" +
    "\n" +
    "    <div class=input-field>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-edit-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-undo-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-delete-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <a href=\"\" class=\"prefix active as-save-config\" ng-click=uiConfigCtrl.showuiConfigCtrl()></a>\r" +
    "\n" +
    "        <select disabled id={{::uiConfigCtrl.fields.attr.key}}>\r" +
    "\n" +
    "      <option value=\"\" disabled selected>Choose your option</option>\r" +
    "\n" +
    "    </select>\r" +
    "\n" +
    "        <label for={{::uiConfigCtrl.fields.attr.key}}>{{::uiConfigCtrl.fields.attr.label}}</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('as-ui/as-buttons/as-buttons.tpl.html',
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


  $templateCache.put('as-ui/as-input/as-input.tpl.html',
    "<div class=\"col s12 m12\">\r" +
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
    "\n"
  );


  $templateCache.put('as-ui/as-select/as-select.tpl.html',
    "<div class=\"col s12 m12\">\r" +
    "\n" +
    "  <div class=\"input-field as-edit-field\" ng-if=field.config.editable>\r" +
    "\n" +
    "    <a href=\"\" class=\"prefix active\" ng-if=! ng-class=\"{'as-edit':!asSelectCtrl.isEdit, 'as-undo':asSelectCtrl.isEdit}\"></a>   \r" +
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
    "</div>"
  );

}]);
