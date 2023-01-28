import React from 'react';
import UpperLowerPointer from '../imagesForCard/UpperLowerPointer.png';
import SidePointer from '../imagesForCard/SidePointer.png';
import PhotoPlug from '../../PhotoPlug/PhotoPlug';

// import meTest1 from '../imagesForCard/meTest1.jpeg';

const PhotoPart = React.memo(({ avatar }) => {
  console.log(avatar);
  return (
    <div className="photoHolder">
      <img className="pointe_ocf upper_ocf" src={UpperLowerPointer} />
      <img className="pointe_ocf bottom_ocf" src={UpperLowerPointer} />
      <img className="pointe_ocf side_ocf leftTop_ocf" src={SidePointer} />
      <img className="pointe_ocf side_ocf leftBottom_ocf" src={SidePointer} />
      <img className="pointe_ocf side_ocf rightTop_ocf" src={SidePointer} />
      <img className="pointe_ocf side_ocf rightBottom_ocf" src={SidePointer} />
      <div className="photoDiv_po">
        {avatar ? <img className="photo_po" src={avatar} /> : <PhotoPlug />}
      </div>
    </div>
  );
});

export default PhotoPart;
