const appName = 'no.vegard.enonic.xp.forms';
const assetBaseUrl = `/_/asset/${appName}/`;
const serviceBaseUrl = `/_/service/${appName}/`;

export const assetUrl = assetPath => assetBaseUrl + assetPath;

export const serviceUrl = servicePath => serviceBaseUrl + servicePath;

export const formAdminUrl = subPath => `/admin/tool/${appName}/main${subPath}`;
