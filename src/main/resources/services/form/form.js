var nodeLib = require('/lib/xp/node');
var contextLib = require('/lib/xp/context');

var XP_FORMS_REPO_NAME = 'forms-repo';

var formId, newFormDefinition;

function setupFormDefinition(form) {
  return form ? {
    type: 'form',
    config: JSON.parse(form).values,
  } : null;
}

function createConnectionToRepo(repoName) {
  return nodeLib.connect({
    repoId: repoName,
    branch: 'master',
  });
}

function createForm() {
  var formRepoConnection = createConnectionToRepo(XP_FORMS_REPO_NAME);
  return formRepoConnection.create(newFormDefinition);
}

function updateForm() {
  var formRepoConnection = createConnectionToRepo(XP_FORMS_REPO_NAME);
  return formRepoConnection.modify({
    key: formId,
    editor: function(node){
      node = newFormDefinition;
      return node;
    },
  });
}

function deleteForm() {
  var formRepoConnection = createConnectionToRepo(XP_FORMS_REPO_NAME);
  return formRepoConnection.delete(formId);
}

function createResponse(msg, status, values) {
  return {
    contentType: 'application/json',
    status: status || 200,
    body: {
      message: msg,
      values: values,
    },
  };
}

function runAsAdmin(callback) {
  return contextLib.run({
    repository: XP_FORMS_REPO_NAME,
    branch: 'master',
    user: {
      login: 'su',
      userStore: 'system',
    },
    principals: [
      'role:system.admin',
    ],
    attributes: {
      ignorePublishTimes: true,
    },
  }, callback);
}

function resetGlobalFormVariables() {
  formId = undefined;
  newFormDefinition = undefined;
}

exports.get = function(req) {
  var formRepoConnection = nodeLib.connect({
    repoId: XP_FORMS_REPO_NAME,
    branch: 'master',
  });

  var form = formRepoConnection.get(req.params.id);

  if (form.config) {
    if (!form.config.fields || !(form.config.fields instanceof Array)) {
      form.config.fields = [
        form.config.fields
      ];
    }
    return {
      contentType: 'application/json',
      body: {
        form: form.config,
      },
    };
  } else {
    return {
      contentType: 'application/json',
      body: {
        form: {
          isMissing: true,
        },
      },
    };
  }
};

exports.post = function(req) {
  formId = req.params.id;
  newFormDefinition = setupFormDefinition(req.body);

  if (!newFormDefinition) {
    resetGlobalFormVariables();
    return createResponse('Form is missing', 400);
  } else if (formId) {
    var savedForm = runAsAdmin(updateForm);
    resetGlobalFormVariables();
    return createResponse('Updated form ' + formId + '.', 200, savedForm);
  } else {
    var response = runAsAdmin(createForm);
    resetGlobalFormVariables();
    return createResponse('Created form ' + response._id + '.', 204);
  }
};

exports.put = function(req) {
  formId = req.params.id;
  newFormDefinition = setupFormDefinition(req.body);
  var response = runAsAdmin(createForm);
  resetGlobalFormVariables();
  return createResponse('Created form ' + response._id + '.', 201, response);
};

exports.delete = function(req) {
  formId = req.params.id;
  runAsAdmin(deleteForm);
  resetGlobalFormVariables();
  return createResponse('Deleted form ' + formId + '.');
}
