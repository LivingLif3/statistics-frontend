import React from 'react';
import CurveOne from '../imagesForCard/CurveOne.png';
import CurveTwo from '../imagesForCard/CurveTwo.png';
import CurveThree from '../imagesForCard/CurveThree.png';
import PhotoPart from './PhotoPart';
import BackInfo from './BackInfo';

const OriginalCardBack = () => {
  return (
    <div className="card_Cab">
      <div className="back_Cab ">
        <img className="curveOne_ocb" src={CurveOne} />
        <PhotoPart />
        <img className="curveTwo_ocb" src={CurveTwo} />
        <BackInfo />
        <img className="curveThree_ocb" src={CurveThree} />
      </div>
    </div>
  );
};

export default OriginalCardBack;
