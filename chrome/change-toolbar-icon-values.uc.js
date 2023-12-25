(function () {
  function waitForElm(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  waitForElm("#find-button").then((elm) => {
    var find = document.querySelector("#find-button label.toolbarbutton-text");
    if (find)
    find.setAttribute("value", "Search");
  });

  setTimeout(function () {
    waitForElm("#nav-bar").then((elm) => {
      var library = document.querySelector(
        "#bookmarks-menu-button label.toolbarbutton-text"
      );
      if (library)
      library.setAttribute("value", "Favorites");
    });
  }, 0);

  waitForElm("#bookmarksMenu").then((elm) => {
    var bookmarksmenu = document.querySelector(
      "#bookmarksMenu label.menubar-text"
    );
    if (bookmarksmenu)
    bookmarksmenu.setAttribute("value", "Favorites");
    //bookmarksmenu.setAttribute("accesskey", "a");
  });

  waitForElm("#bookmarksMenu").then((elm) => {
    var bookmarksmenu = document.querySelector("#bookmarksMenu");
    if (bookmarksmenu)
    bookmarksmenu.removeAttribute("accesskey");
  });
})();
