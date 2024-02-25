(() => {
  const colorKeys = ["ThreeDFace", "ThreeDShadow", "ThreeDHighlight"];
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

  const css = `#main-window:not([sizemode="maximized"]) #browser-bottombox::after {
  background-image: url('data:image/svg+xml,<svg width="13" height="13" version="1.1" viewBox="0 0 3.4396 3.4396" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g><g><rect x="2.9104" y="0.0000" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.6458" y=".26458" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.3812" y=".52917" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.1167" y=".79375" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.8521" y="1.0583" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.5875" y="1.3229" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.3229" y="1.5875" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.0583" y="1.8521" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x=".79375" y="2.1167" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x=".52917" y="2.3812" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x=".26458" y="2.6458" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="0.0000" y="2.9104" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.9104" y=".26458" width=".26458" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.6458" y=".52917" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.3812" y=".79375" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.1167" y="1.0583" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="1.8521" y="1.3229" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="1.5875" y="1.5875" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="1.3229" y="1.8521" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="1.0583" y="2.1167" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x=".79375" y="2.3812" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x=".52917" y="2.6458" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x=".26458" y="2.9104" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.9104" y="1.0583" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.6458" y="1.3229" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.3812" y="1.5875" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.1167" y="1.8521" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.8521" y="2.1167" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.5875" y="2.3812" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.3229" y="2.6458" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="1.0583" y="2.9104" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.9104" y="1.3229" width=".26458" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.6458" y="1.5875" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.3812" y="1.8521" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.1167" y="2.1167" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="1.8521" y="2.3812" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="1.5875" y="2.6458" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="1.3229" y="2.9104" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.9104" y="2.1167" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.6458" y="2.3812" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.3812" y="2.6458" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.1167" y="2.9104" width=".26458" height=".26458" fill="${colors.ThreeDHighlight}"/><rect x="2.9104" y="2.3812" width=".26458" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.6458" y="2.6458" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="2.3812" y="2.9104" width=".52917" height=".26458" fill="${colors.ThreeDShadow}"/><rect x="3.1750" y="0.0000" width=".26458" height="3.4396" fill="${colors.ThreeDFace}"/><rect x="0.0000" y="3.1750" width="3.1750" height=".26458" fill="${colors.ThreeDFace}"/></g></g></svg>');
}`;

  const sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(
    Ci.nsIStyleSheetService,
  );
  const uri = Services.io.newURI(
    "data:text/css;charset=UTF=8," + encodeURIComponent(css),
  );

  sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
