var portalLib = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

var timestamp = Date.now();

function handleGet() {

  var view = resolve('./forms-admin.html');

  var model = {
    formBuilderAdmin: {
      faviconUrl: portalLib.assetUrl({ path: "/img/icons/adminFavicon.png" }),
      cssUrl: portalLib.assetUrl({ path: "/formsAdmin.css" }),
      jsUrl: portalLib.assetUrl({ path: "/formsAdmin.js" })
    },
    appLauncherConfig: {
      adminUrl: "" + portalLib.url({path: "/admin"}),
      assetsUri: "" + portalLib.url({path: "/admin/assets/" + timestamp}),
      appId: "xp-forms",
      appName: "Form builder"
    }
  };

  return {
    contentType: 'text/html',
    body: thymeleaf.render(view, model)
  };
}

exports.get = handleGet;