import React from 'react';
import { assetUrl } from '../admin/util/EnonicHelper';

const LoadingWidget = () => (
  <div className="xpLoadingWidget">
    <img
      alt="Loading"
      className="xpLoadingWidget__spinner"
      src={assetUrl('img/icons/Spinner.svg')}
    />
  </div>
);

export default LoadingWidget;
