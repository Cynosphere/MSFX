(() => {
  const colorKeys = [
    "ActiveBorder",
    "ActiveCaption",
    "AppWorkspace",
    "Background",
    "ButtonFace",
    "ButtonHighlight",
    "ButtonShadow",
    "ButtonText",
    "CaptionText",
    "GrayText",
    "Highlight",
    "HighlightText",
    "InactiveBorder",
    "InactiveCaption",
    "InactiveCaptionText",
    "InfoBackground",
    "InfoText",
    "Menu",
    "MenuText",
    "Scrollbar",
    "ThreeDDarkShadow",
    "ThreeDFace",
    "ThreeDHighlight",
    "ThreeDLightShadow",
    "ThreeDShadow",
    "Window",
    "WindowFrame",
    "WindowText",
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

  const css = `:root {
    ${Object.entries(colors)
      .map(([key, val]) => `--${key}: ${val};`)
      .join("\n    ")}
  }`;

  const sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(
    Ci.nsIStyleSheetService,
  );
  const uri = Services.io.newURI(
    "data:text/css;charset=UTF=8," + encodeURIComponent(css),
  );

  sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
