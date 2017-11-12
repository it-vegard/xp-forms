var portal = require('/lib/xp/portal');
var nodeLib = require('/lib/xp/node');

function getHandler(request) {
  var component = portal.getComponent();

  var formRepo = nodeLib.connect({
    repoId: 'forms-repo',
    branch: 'master',
  });

  var formContent = formRepo.get(component.config['form-selector']);

  var pageContributionsScripts = request.pageContributions.bodyEnd || [];
  pageContributionsScripts.push('<script type="text/javascript" src="' + portal.assetUrl({ path: 'xpForms.js' }) + '"></script>');

  return {
    body: '<div id="xpFormRoot" data-th-id="' + formContent.id + '"/>',
    contentType: 'text/html',
    pageContributions: {
      bodyEnd: pageContributionsScripts,
    },
  };
}

exports.get = getHandler;
