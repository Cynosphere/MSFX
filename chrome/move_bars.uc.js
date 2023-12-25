// 'MoveUrlbar' script for Firefox 60+ by Aris
// option: place urlbar on a different toolbar
// option: place back button on a different toolbar
// option: place back button on a different toolbar
(function () {
  var {CustomizableUI} = Components.utils.import(
    "resource:///modules/CustomizableUI.jsm",
    {}
  );

  var navigation = CustomizableUI.AREA_NAVBAR;
  var tabs = CustomizableUI.AREA_TABSTRIP;
  var menu = CustomizableUI.AREA_MENUBAR;
  var bookmarks = CustomizableUI.AREA_BOOKMARKS;

  /* [target toolbar of item]
  menu = 'menubar'
  tabs = 'tabs toolbar'
  bookmarks = 'bookmarks toolbar'
  navigation='navigation toolbar'   */
  var backbutton_on_toolbar = navigation;
  var forwardbutton_on_toolbar = navigation;
  var urlbar_on_toolbar = navigation;

  /* [target position of item]
  0 = 1st
  1 = 2nd
  2 = 3rd
  ...
  x = xth    */
  var backbutton_on_toolbar_position = 0;
  var forwardbutton_on_toolbar_position = 1;
  var urlbar_on_toolbar_position = 0;

  const separateAddressBar = true;
  const moveNavigation = true;
  const bottomTabs = true;
  const menuToTop = true;

  var MoveUrlbar = {
    init: function () {
      try {
        document
          .getElementById("back-button")
          .setAttribute("removable", "true");
        document
          .getElementById("forward-button")
          .setAttribute("removable", "true");
        document
          .getElementById("urlbar-container")
          .setAttribute("removable", "true");
        document
          .getElementById("unified-extensions-button")
          .setAttribute("removable", "true");
      } catch (e) {}

      // Forces back/forward to navigation bar
      if (moveNavigation) {
        CustomizableUI.addWidgetToArea("back-button", backbutton_on_toolbar);
        CustomizableUI.moveWidgetWithinArea(
          "back-button",
          backbutton_on_toolbar_position
        );
        CustomizableUI.addWidgetToArea(
          "forward-button",
          forwardbutton_on_toolbar
        );
        CustomizableUI.moveWidgetWithinArea(
          "forward-button",
          forwardbutton_on_toolbar_position
        );
      }

      // Forces address bar to additional_top_toolbar1 (Address)
      // THIS WILL SOFTBRICK YOUR FIREFOX IF ADDITIONAL TOP TOOLBARS AREN'T
      // ENABLED BUT THIS IS
      if (separateAddressBar) {
        CustomizableUI.addWidgetToArea(
          "urlbar-container",
          "additional_top_toolbar1"
        );
        CustomizableUI.moveWidgetWithinArea(
          "urlbar-container",
          urlbar_on_toolbar_position
        );
      }

      // Moves tabs to the bottom of the toolbar stack
      if (bottomTabs) {
        document
          .getElementById("navigator-toolbox")
          .appendChild(document.getElementById("TabsToolbar"));
      }

      // Moves the main menu button to the top row, before the last item
      // (activity throbber). This is because the icon is hidden but not the
      // button and  creates bad padding if you're using the navigation bar as
      // an address bar
      if (menuToTop) {
        setTimeout(() => {
          document
            .getElementById("PanelUI-button")
            .setAttribute("removable", "true");
          const menubar = document.getElementById(menu);
          menubar.insertBefore(
            document.getElementById("PanelUI-button"),
            menubar.lastChild
          );
        }, 0);
      }
    },
  };

  document.addEventListener("DOMContentLoaded", MoveUrlbar.init(), false);
})();
