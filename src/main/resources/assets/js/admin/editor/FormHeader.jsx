import React from 'react';
import TextInput from './fields/TextInput';
import { assetUrl } from '../util/EnonicHelper';

const FormHeader = () => (
  <div className="xpFormHeading">
    <img
      src={assetUrl('img/icons/adminFavicon.png')}
      className="xpFormLogo xpFormLogo--large"
      alt=""
    />
    <div className="xpFormHeadingMain">
      <TextInput
        id="displayName"
        placeholder="<Display name>"
        size={TextInput.Sizes.LARGE}
        required
      />
      <TextInput
        id="id"
        placeholder="<name>"
        size={TextInput.Sizes.SMALL}
        required
      />
    </div>
  </div>
);

export default FormHeader;
