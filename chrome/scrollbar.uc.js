(function () {
  const colorKeys = [
    "ThreeDFace",
    "ThreeDShadow",
    "ThreeDDarkShadow",
    "ThreeDLightShadow",
    "ThreeDHighlight",
    "ButtonText",
  ];
  const colors = (() => {
    const colors = {};

    const elem = document.createElement("div");
    document.body.appendChild(elem);

    for (const key of colorKeys) {
      elem.style.color = key;
      colors[key] = window.getComputedStyle(elem).color;
    }

    document.body.removeChild(elem);

    return colors;
  })();

  const css = `@media all and (-moz-overlay-scrollbars) {
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
  background-color: ${colors.ThreeDHighlight} !important;
  opacity: 1 !important;
}

thumb
{
  color-scheme: light !important;
  -moz-default-appearance: none !important;
  position: relative !important;
  background-color: ${colors.ThreeDFace} !important;
  min-height: 8px !important;
  pointer-events: auto !important;
  border: 0 !important;
  box-shadow: inset -1px -1px 0 ${colors.ThreeDDarkShadow}, inset 1px 1px 0 ${colors.ThreeDLightShadow}, inset -2px -2px 0 ${colors.ThreeDShadow}, inset 2px 2px 0 ${colors.ThreeDHighlight} !important;
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
  background-color: ${colors.ThreeDFace} !important;
  box-shadow: inset -1px -1px 0 ${colors.ThreeDDarkShadow}, inset 1px 1px 0 ${colors.ThreeDLightShadow}, inset -2px -2px 0 ${colors.ThreeDShadow}, inset 2px 2px 0 ${colors.ThreeDHighlight} !important;
}

scrollbarbutton:not([disabled="true"]):hover:active
{
  background-color: ${colors.ThreeDFace} !important;
  border: 1px solid ${colors.ThreeDShadow} !important;
  box-shadow: none !important;
}

slider,
slider[orient="vertical"]
{
  color-scheme: light !important;
  -moz-default-appearance: none;
  background-color: ${colors.ThreeDHighlight} !important;
  background-repeat: repeat !important;
  background-image: url('data:image/svg+xml,<svg width="2" height="2" version="1.1" viewBox="0 0 .52917 .52917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g><g><rect x=".26458" y="0.0000" width=".26458" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="0.0000" y=".26458" width=".26458" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="0.0000" y="0.0000" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x=".26458" y=".26458" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/></g></g></svg>') !important;
}

scrollcorner
{
  color-scheme: light !important;
  -moz-default-appearance: none !important;
  -moz-binding: url(chrome://global/content/bindings/scrollbar.xml#scrollbar-base);
  width: 16px;
  cursor: default;
  background-color: ${colors.ThreeDFace} !important;
}

scrollbarbutton[type="increment"]
{
  -moz-default-appearance: none;
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect width="1" height="7" y="4" x="5" fill="${colors.ButtonText}"/><rect width="1" height="5" y="5" x="6" fill="${colors.ButtonText}"/><rect width="1" height="3" y="6" x="7" fill="${colors.ButtonText}"/><rect width="1" height="1" y="7" x="8" fill="${colors.ButtonText}"/></svg>') !important;
  background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="increment"]
{
  -moz-default-appearance: none;
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 15 15"><rect height="1" width="7" x="3" y="5" fill="${colors.ButtonText}"/><rect height="1" width="5" y="6" x="4" fill="${colors.ButtonText}"/><rect height="1" width="3" x="5" y="7" fill="${colors.ButtonText}"/><rect width="1" height="1" x="6" y="8" fill="${colors.ButtonText}"/></svg>') !important;
  background-position: center center !important;
}

scrollbarbutton[type="decrement"]
{
  -moz-default-appearance: none;
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 15 15"><rect width="1" height="7" y="4" x="8" fill="${colors.ButtonText}"/><rect width="1" height="5" y="5" x="7" fill="${colors.ButtonText}"/><rect width="1" height="3" y="6" x="6" fill="${colors.ButtonText}"/><rect width="1" height="1" y="7" x="5" fill="${colors.ButtonText}"/></svg>') !important;
  background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"]
{
  -moz-default-appearance: none;
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect height="1" width="7" y="8" x="3" fill="${colors.ButtonText}"/><rect height="1" width="5" x="4" y="7" fill="${colors.ButtonText}"/><rect height="1" width="3" y="6" x="5" fill="${colors.ButtonText}"/><rect width="1" height="1" y="5" x="6" fill="${colors.ButtonText}"/></svg>') !important;
  background-position: center center !important;
}

scrollbarbutton[type="increment"][disabled="true"]
{
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect fill="${colors.ThreeDShadow}" width="1" height="7" y="4" x="5"/><rect width="1" height="2" fill="${colors.ThreeDHighlight}" x="6" y="10"/><rect width="1" height="2" fill="${colors.ThreeDHighlight}" x="7" y="9"/><rect width="1" height="2" fill="${colors.ThreeDHighlight}" x="8" y="8"/><rect width="1" fill="${colors.ThreeDHighlight}" height="1" y="8" x="9"/><rect fill="${colors.ThreeDShadow}" width="1" height="5" y="5" x="6"/><rect fill="${colors.ThreeDShadow}" width="1" height="3" y="6" x="7"/><rect fill="${colors.ThreeDShadow}" width="1" height="1" y="7" x="8"/></svg>') !important;
  background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="increment"][disabled="true"]
{
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 15 15"><rect fill="${colors.ThreeDShadow}" height="1" width="7" x="3" y="5"/><rect fill="${colors.ThreeDHighlight}" height="1" width="2" y="6" x="9"/><rect fill="${colors.ThreeDHighlight}" height="1" width="2" y="7" x="8"/><rect fill="${colors.ThreeDHighlight}" height="1" width="2" x="7" y="8"/><rect fill="${colors.ThreeDHighlight}" height="1" width="1" x="7" y="9"/><rect fill="${colors.ThreeDShadow}" height="1" width="5" y="6" x="4"/><rect fill="${colors.ThreeDShadow}" height="1" width="3" x="5" y="7"/><rect fill="${colors.ThreeDShadow}" width="1" height="1" x="6" y="8"/></svg>') !important;
  background-position: center center !important;
}

scrollbarbutton[type="decrement"][disabled="true"]
{
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 15 15"><rect fill="${colors.ThreeDShadow}" width="1" height="7" y="4" x="8"/><rect width="1" height="7" fill="${colors.ThreeDHighlight}" y="5" x="9"/><rect fill="${colors.ThreeDShadow}" width="1" height="5" y="5" x="7"/><rect fill="${colors.ThreeDShadow}" width="1" height="3" y="6" x="6"/><rect fill="${colors.ThreeDShadow}" width="1" height="1" y="7" x="5"/></svg>') !important;
  background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"][disabled="true"]
{
  background-repeat: no-repeat !important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect fill="${colors.ThreeDShadow}" height="1" width="7" y="8" x="3"/><rect fill="${colors.ThreeDHighlight}" width="7" height="1" y="9" x="4"/><rect fill="${colors.ThreeDShadow}" height="1" width="5" x="4" y="7"/><rect fill="${colors.ThreeDShadow}" height="1" width="3" y="6" x="5"/><rect fill="${colors.ThreeDShadow}" width="1" height="1" y="5" x="6"/></svg>') !important;
  background-position: center !important;
}`;
  const sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(
    Ci.nsIStyleSheetService,
  );
  const uri = Services.io.newURI(
    "data:text/css;charset=UTF=8," + encodeURIComponent(css),
  );

  sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
