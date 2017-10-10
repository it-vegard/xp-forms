var repoLib = require('/lib/xp/repo');
var nodeLib = require('/lib/xp/node');
var contextLib = require('/lib/xp/context');

var XP_FORMS_REPO_NAME = "forms-repo";
var DUMMY_FORM = {
  type: "form",
  config: {
    id: "my-first-form",
    displayName: "New form",
    title: "Hello World",
    submitButton: "Submit",
    successMessage: "Thanks for submitting",
    overrideSubmitUrl: "http://localhost:8080",
    overrideSubmitMethod: "GET",
    fields: [
      {
        label: "Label",
        id: "label"
      },
      {
        label: "Name",
        id: "name"
      }
    ]
  }
};

function initializeFormsRepo() {
  if (!repoLib.get(XP_FORMS_REPO_NAME)) {
    repoLib.create({
      id: XP_FORMS_REPO_NAME,
      rootChildOrder: '_timestamp DESC'
    });
  }
}

function addDummyForm() {
  var formsRepo = nodeLib.connect({
    repoId: XP_FORMS_REPO_NAME,
    branch: 'master'
  });

  var numberOfForms = formsRepo.query({query: 'type = "form"'}).count;
  if (numberOfForms === 0) {
    formsRepo.create(DUMMY_FORM);
  }
}

function initialize() {
  initializeFormsRepo();
  addDummyForm();
}

var repos = contextLib.run({
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
}, initialize);