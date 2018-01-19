var nodeLib = require('/lib/xp/node');

var XP_FORMS_REPO_NAME = "forms-repo";

exports.get = function(req) {
  var formRepoConnection = nodeLib.connect({
    repoId: XP_FORMS_REPO_NAME,
    branch: 'master'
  });

  var forms = formRepoConnection.query({query: 'type="form"'}).hits;

  var results = [];

  forms.forEach(function(form) {
    var formContent = formRepoConnection.get(form.id).config;
    results.push({
      id: form.id,
      displayName: formContent.displayName,
      description: formContent.id
    });
  });

  return {
    contentType: 'application/json',
    body: {
      count: results.length,
      total: results.length,
      hits: results
    }
  };
};
