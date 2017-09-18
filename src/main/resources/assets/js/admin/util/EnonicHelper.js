const getAssetBaseUrl = () => {
  return '_/asset/no.vegard.enonic.xp.Forms/'
};

export const assetUrl = (assetPath) => {
  return getAssetBaseUrl() + assetPath;
};

const EnonicHelper = {
  assetUrl
};

export default EnonicHelper;
