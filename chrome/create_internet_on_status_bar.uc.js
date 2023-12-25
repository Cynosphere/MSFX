(function () {
  Components.utils.import("resource:///modules/CustomizableUI.jsm");
  var Services =
    globalThis.Services ||
    ChromeUtils.import("resource://gre/modules/Services.jsm").Services;
  var sss = Components.classes[
    "@mozilla.org/content/style-sheet-service;1"
  ].getService(Components.interfaces.nsIStyleSheetService);

  var IE6StatusBar = {
    init: function () {
      try {
        // create a default toolbar button
        CustomizableUI.createWidget({
          id: "ie6_statusbar", // button id
          defaultArea: CustomizableUI.AREA_NAVBAR,
          removable: true,
          label: "Internet", // button title
          tooltiptext: "", // tooltip title
          onCreated: function (button) {
            return button;
          },
        });

        // style button icon / embedded non-animated icon, because there is no image for then inside Fx anymore
        var uri = Services.io.newURI(
          "data:text/css;charset=utf-8," +
            encodeURIComponent(
              `#ie6_statusbar {
  display: flex;
  width: 151px;
  height: 18px;
  box-shadow: inset -1px -1px 0 ThreeDHighlight, inset 1px 1px 0 ThreeDShadow;
  justify-content: left !important;
}

#ie6_statusbar::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 3px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeUExURYGBgf///8HBwQD/AACBAAAAhQAA/wAAAABmnAAAALYrxDEAAAAKdFJOU////////////wCyzCzPAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAYUlEQVQoU3XM0Q6AUAgCUEv05v//cGDWWls8yWHT6pMfMKWvBrNtdwAxYLu7eoZEADiSPVeDZXJNdoDSoETyzxvUB4CDnX8GoEl/bihtwXRvYAQRA3W1WOoNVUvpa+BJ1Qlz1waLzqVQ1QAAAABJRU5ErkJggg==");
}

#ie6_statusbar::after {
  content: "Internet";
  display: inline-block;
  text-shadow: none !important;
}
#ie6_statusbar > .toolbarbutton-icon {
  display: none;
}`
            ),
          null,
          null
        );

        // remove old style sheet, before registering the new one
        if (sss.sheetRegistered(uri, sss.AGENT_SHEET)) {
          sss.unregisterSheet(uri, sss.AGENT_SHEET);
        }
        sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
      } catch (e) {
        Components.utils.reportError(e);
      }
    },
  };

  document.addEventListener("DOMContentLoaded", IE6StatusBar.init(), false);
})();
