var nodeLib = require('/lib/xp/node');

var XP_FORMS_REPO_NAME = "forms-repo";

exports.get = function(req) {
  var formRepoConnection = nodeLib.connect({
    repoId: XP_FORMS_REPO_NAME,
    branch: 'master'
  });

  var form = formRepoConnection.get(req.params.id);

  if (form.config) {
    return {
      contentType: 'application/json',
      body: {
        form: form.config
      }
    }
  } else {
    return {
      contentType: 'application/json',
      body: {
        form: { isMissing: true }
      }
    }
  }
};