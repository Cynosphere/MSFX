(function () {
  var css = `@media all and (-moz-overlay-scrollbars) {
      scrollbar[root="true"] {
          position: relative;
          z-index: 2147483647;
      }
  
      scrollbar:not([active="true"]),
      scrollbar[disabled="true"] {
          visibility: hidden;
      }
  }
  
  scrollbar
  {
      color-scheme: light !important;
      -moz-default-appearance: none;
      -moz-binding: url("chrome://global/content/bindings/scrollbar.xml#scrollbar");
      cursor: default;
      min-width: 16px !important;
      background-color: ThreeDHighlight !important;
      opacity: 1 !important;
  }
  
  thumb
  {
      color-scheme: light !important;
      -moz-default-appearance: none !important;
      position: relative !important;
      background-color: -moz-Dialog !important;
      min-height: 8px !important;
      pointer-events: auto !important;
      border: 0 !important;
      box-shadow: inset -1px -1px 0 WindowFrame, inset 1px 1px 0 -moz-Dialog, inset -2px -2px 0 ThreeDShadow, inset 2px 2px 0 ThreeDHighlight !important;
  }
  
  thumb[orient="horizontal"] {
      -moz-default-appearance: none;
      min-height: 16px !important;
      min-width: 8px !important;
      max-width: 100% !important;
      background-repeat: no-repeat !important;
  }
  
  scrollbarbutton
  {
      color-scheme: light !important;
      min-width: 16px !important;
      min-height: 16px !important;
      -moz-default-appearance: none !important;
      background-color: -moz-Dialog !important;
      box-shadow: inset -1px -1px 0 WindowFrame, inset 1px 1px 0 -moz-Dialog, inset -2px -2px 0 ThreeDShadow, inset 2px 2px 0 ThreeDHighlight !important;
  }
  
  scrollbarbutton:not(.disabled):hover:active
  {
      background-color: -moz-dialog !important;
      border: 1px solid ThreeDShadow !important;
      box-shadow: none !important;
  }
  
  slider,
  slider[orient="vertical"]
  {
      color-scheme: light !important;
      -moz-default-appearance: none;
      background-color: ThreeDHighlight !important;
      background-repeat: repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAuNTI5MTcgLjUyOTE3IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxyZWN0IHg9Ii4yNjQ1OCIgeT0iMC4wMDAwIiB3aWR0aD0iLjI2NDU4IiBoZWlnaHQ9Ii4yNjQ1OCIgZmlsbD0iVGhyZWVEU2hhZG93Ii8+PHJlY3QgeD0iMC4wMDAwIiB5PSIuMjY0NTgiIHdpZHRoPSIuMjY0NTgiIGhlaWdodD0iLjI2NDU4IiBmaWxsPSJUaHJlZURTaGFkb3ciLz48cmVjdCB4PSIwLjAwMDAiIHk9IjAuMDAwMCIgd2lkdGg9Ii4yNjQ1OCIgaGVpZ2h0PSIuMjY0NTgiIGZpbGw9IlRocmVlREhpZ2hsaWdodCIvPjxyZWN0IHg9Ii4yNjQ1OCIgeT0iLjI2NDU4IiB3aWR0aD0iLjI2NDU4IiBoZWlnaHQ9Ii4yNjQ1OCIgZmlsbD0iVGhyZWVESGlnaGxpZ2h0Ii8+PC9nPjwvZz48L3N2Zz4=") !important;
  }
  
  scrollcorner
  {
      color-scheme: light !important;
      -moz-default-appearance: none !important;
      -moz-binding: url(chrome://global/content/bindings/scrollbar.xml#scrollbar-base);
      width: 16px;
      cursor: default;
      background-color: -moz-dialog; !important;
  }
  
  scrollbarbutton[type="increment"]
  {
      -moz-default-appearance: none;
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiB5PSI0IiB4PSI1IiBmaWxsPSJDYW52YXNUZXh0Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iNSIgeT0iNSIgeD0iNiIgZmlsbD0iQ2FudmFzVGV4dCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjMiIHk9IjYiIHg9IjciIGZpbGw9IkNhbnZhc1RleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI4IiBmaWxsPSJDYW52YXNUZXh0Ii8+CiAgCiAgCjwvc3ZnPg==") !important;
      background-position: center center !important;
  }
  
  scrollbar[orient="vertical"] > scrollbarbutton[type="increment"]
  {
      -moz-default-appearance: none;
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSI3IiB4PSIzIiB5PSI1IiBmaWxsPSJDYW52YXNUZXh0Ii8+PHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iNSIgeT0iNiIgeD0iNCIgZmlsbD0iQ2FudmFzVGV4dCIvPjxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjUiIHk9IjciIGZpbGw9IkNhbnZhc1RleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4PSI2IiB5PSI4IiBmaWxsPSJDYW52YXNUZXh0Ii8+CiAgCiAgCjwvc3ZnPg==") !important;
      background-position: center center !important;
  }
  
  scrollbarbutton[type="decrement"]
  {
      -moz-default-appearance: none;
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiB5PSI0IiB4PSI4IiBmaWxsPSJDYW52YXNUZXh0Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iNSIgeT0iNSIgeD0iNyIgZmlsbD0iQ2FudmFzVGV4dCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjMiIHk9IjYiIHg9IjYiIGZpbGw9IkNhbnZhc1RleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI1IiBmaWxsPSJDYW52YXNUZXh0Ii8+CiAgCiAgCjwvc3ZnPg==") !important;
      background-position: center center !important;
  }
  
  scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"]
  {
      -moz-default-appearance: none;
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KCTxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjciIHk9IjgiIHg9IjMiIGZpbGw9IkNhbnZhc1RleHQiLz48cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSI1IiB4PSI0IiB5PSI3IiBmaWxsPSJDYW52YXNUZXh0Ii8+PHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMyIgeT0iNiIgeD0iNSIgZmlsbD0iQ2FudmFzVGV4dCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHk9IjUiIHg9IjYiIGZpbGw9IkNhbnZhc1RleHQiLz4KCQoJCjwvc3ZnPg==") !important;
      background-position: center center !important;
  }
  
  scrollbarbutton[type="increment"][disabled="true"]
  {
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjciIHk9IjQiIHg9IjUiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIyIiBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHg9IjYiIHk9IjEwIi8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMiIgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSI3IiB5PSI5Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMiIgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSI4IiB5PSI4Ii8+PHJlY3Qgd2lkdGg9IjEiIGZpbGw9IlRocmVlREhpZ2hsaWdodCIgaGVpZ2h0PSIxIiB5PSI4IiB4PSI5Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiB5PSI1IiB4PSI2Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSIzIiB5PSI2IiB4PSI3Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI4Ii8+DQoJDQoJDQo8L3N2Zz4=");
      background-position: center center !important;
  }
  
  scrollbar[orient="vertical"] > scrollbarbutton[type="increment"][disabled="true"]
  {
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjciIHg9IjMiIHk9IjUiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHk9IjYiIHg9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHk9IjciIHg9IjgiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHg9IjciIHk9IjgiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjciIHk9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjUiIHk9IjYiIHg9IjQiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjUiIHk9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjYiIHk9IjgiLz4NCgkNCgkNCjwvc3ZnPg==");
      background-position: center center !important;
  }
  
  scrollbarbutton[type="decrement"][disabled="true"]
  {
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjciIHk9IjQiIHg9IjgiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHk9IjUiIHg9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHk9IjUiIHg9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjMiIHk9IjYiIHg9IjYiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHk9IjciIHg9IjUiLz4NCgkNCgkNCjwvc3ZnPg==");
      background-position: center center !important;
  }
  
  scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"][disabled="true"]
  {
      background-repeat: no-repeat !important;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjciIHk9IjgiIHg9IjMiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHdpZHRoPSI3IiBoZWlnaHQ9IjEiIHk9IjkiIHg9IjQiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjUiIHg9IjQiIHk9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjMiIHk9IjYiIHg9IjUiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHk9IjUiIHg9IjYiLz4NCgkNCgkNCjwvc3ZnPg==") !important;
      background-position: center !important;
  }`;
  var sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(
    Ci.nsIStyleSheetService
  );
  var uri = Services.io.newURI(
    "data:text/css;charset=UTF=8," + encodeURIComponent(css)
  );

  sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
