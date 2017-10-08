const appName = 'no.vegard.enonic.xp.forms';
const assetBaseUrl = `_/asset/${appName}/`;

export const assetUrl = (assetPath) => {
  return assetBaseUrl + assetPath;
};
