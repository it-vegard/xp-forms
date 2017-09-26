import React from 'react';
import TextInput from "./fields/TextInput";
import { assetUrl } from '../util/EnonicHelper.js';

class FormHeader extends React.Component {

  render() {
    return (
      <div className="xpFormHeading">
        <img src={assetUrl('img/icons/adminFavicon.png')} className="xpform-logo"/>
        <div className="xpFormHeadingMain">
          <TextInput
            id="formTitle"
            placeholder="<Display name>"
            size={TextInput.Sizes.LARGE}
            required={true}
          />
          <TextInput
            id="formName"
            placeholder="<name>"
            size={TextInput.Sizes.SMALL}
            required={true}
          />
        </div>
      </div>
    )
  }
}

export default FormHeader;