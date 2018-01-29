var contextLib = require('/lib/xp/context');

var adminToolsBean = __.newBean('com.enonic.xp.app.main.GetAdminToolsScriptBean');
var uriHelperBean = __.newBean('com.enonic.xp.app.main.UriScriptHelper');

function getAdminTools() {
  var result = __.toNativeObject(adminToolsBean.execute());
  return result.sort(function (tool1, tool2) {
    return (tool1.displayName > tool2.displayName) ? 1 : -1;
  });
}

function handleGet() {
  var launcherConfig = contextLib.run({
    repository: 'system-repo',
    branch: 'master',
    user: {
      login: 'su',
      userStore: 'system'
    },
    principals: [
      "role:system.admin"
    ],
    attributes: {
      'ignorePublishTimes': true
    }
  }, getAdminTools);

  return {
    contentType: 'application/json',
    body: {
      launcherTitle: uriHelperBean.getInstallation() || "Tools",
      launcherConfig: launcherConfig
    }
  }
}

exports.get = handleGet;
