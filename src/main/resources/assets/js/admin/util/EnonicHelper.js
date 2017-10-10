const appName = 'no.vegard.enonic.xp.forms';
const assetBaseUrl = `_/asset/${appName}/`;
const serviceBaseUrl = `_/service/${appName}/`;

export const assetUrl = (assetPath) => {
  return assetBaseUrl + assetPath;
};

export const serviceUrl = (servicePath) => {
  return serviceBaseUrl + servicePath;
};
