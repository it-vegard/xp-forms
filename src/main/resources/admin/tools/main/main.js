var portalLib = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

function handleGet() {

  var view = resolve('./main.html');

  var model = {
    appId: "formsAdmin",
    appName: "Form Studio - Enonic XP",
    xpFormsCssUrl: portalLib.assetUrl({ path: "/formsAdmin.css" }),
    xpFormsFaviconUrl: portalLib.assetUrl({ path: "/img/icons/adminFavicon.png" }),
    xpFormsJsUrl: portalLib.assetUrl({ path: "/formsAdmin.js" }),
  };

  return {
    contentType: 'text/html',
    body: thymeleaf.render(view, model)
  };
}

exports.get = handleGet;
