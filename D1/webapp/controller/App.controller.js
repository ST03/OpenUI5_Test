sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowDevInProc : function () {
         // show a native JavaScript alert
         alert("개발중 입니다");
      }
   });
});
