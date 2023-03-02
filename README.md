# MSFX
Fork of [the MSFX Firefox userChrome](https://github.com/WinClassic/MSFX).
![Screenshot of MSFX](.assets/screenshot.png)

## Changes
* Uses normal [firefox-scripts](https://github.com/xiaoxiaoflood/firefox-scripts) instead of a stripped down version for greater userscript compatibility
* More accurate styles in some places
  * Bookmarks bar folder menus
  * All tabs button
    * Replaced with overflow arrows icon
  * Scrollbars forced to light theme
  * Selected address bar forced to light theme
  * Resize grabber no longer appears when maximized
  * Autoplay Pending indicator icon replaced
* Pinned tabs no longer have extra padding
* Internet status bar widget is its own component
  * Empty boxes have been removed in favor of putting extensions on the status bar
* Address bar is no longer forced to the Address toolbar when opening a new window

## Installation
* Set the following keys in `about:config`:
  * `svg.context-properties.content.enabled` to `true`
  * `ui.prefersReducedMotion` to `1`
  * `browser.display.windows.non_native_menus` to `0`
* Follow [firefox-scripts](https://github.com/xiaoxiaoflood/firefox-scripts) installation.
* Install [Status Bar userscript](https://raw.githubusercontent.com/xiaoxiaoflood/firefox-scripts/master/chrome/status-bar.uc.js).
* Merge `chrome` folder from the repo into your profile's `chrome` folder.

## Recommendations
* [Extensions Options Menu](https://raw.githubusercontent.com/xiaoxiaoflood/firefox-scripts/master/chrome/extensionOptionsMenu.uc.js)
  * More lightweight than the stock extensions menu, which is disabled by the theme anyways
* [userChromeJS Manager](https://raw.githubusercontent.com/xiaoxiaoflood/firefox-scripts/master/chrome/rebuild_userChrome.uc.js)
* [Save File to](https://raw.githubusercontent.com/xiaoxiaoflood/firefox-scripts/master/extensions/savefileto/savefileto.xpi)
  * **Requires extensions support in firefox-scripts**
  * "Replaces" save dialog for hybrid classic theme setup with Windhawk until investigation is done to fix the save dialog on classic enabled programs.
