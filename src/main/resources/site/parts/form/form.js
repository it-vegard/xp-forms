var portal = require('/lib/xp/portal');
var nodeLib = require('/lib/xp/node');

exports.get = function(request) {

  var component = portal.getComponent();

  var formRepo = nodeLib.connect({
    repoId: 'forms-repo',
    branch: 'master'
  });

  var formContent = formRepo.get(component.config['form-selector']).config;

  return {
    body: '<h1>Hello World</h1>' +
          '<pre>' + JSON.stringify(formContent, null, 2) + '</pre>',
    contentType: 'text/html'
  }

};