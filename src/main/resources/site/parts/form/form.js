var portal = require('/lib/xp/portal');
var nodeLib = require('/lib/xp/node');

function createError(errorMessage) {
  return '<div class="error-message" role="alert">' + errorMessage + '</div>';
}

function createFormContainer(formSelector) {
  if (formSelector) {
    var formRepo = nodeLib.connect({
      repoId: 'forms-repo',
      branch: 'master',
    });

    var formContent = formRepo.get(formSelector);
    if (formContent && formContent._id) {
      return '<div id="xpFormRoot" data-form-id="' + formContent._id + '"/>';
    } else {
      return createError('Could not find the form...');
    }
  }
  return createError('No form has been selected yet...');
}

function createPageContributions(reqPCs) {
  var pageContributions = reqPCs || {};
  pageContributions.bodyEnd = reqPCs && reqPCs.bodyEnd ? reqPCs.bodyEnd : [];
  pageContributions.bodyEnd.push('<script type="text/javascript" src="' + portal.assetUrl({ path: 'xpForms.js' }) + '"></script>');
  return pageContributions;
}

function getHandler(request) {
  var component = portal.getComponent();
  return {
    body: createFormContainer(component.config['form-selector']),
    contentType: 'text/html',
    pageContributions: createPageContributions(request.pageContributions)
  };
}

exports.get = getHandler;
