import React from 'react';
import UpperLowerPointer from '../imagesForCard/UpperLowerPointer.png';
import SidePointer from '../imagesForCard/SidePointer.png';
import PhotoPlug from '../../PhotoPlug/PhotoPlug';

// import meTest1 from '../imagesForCard/meTest1.jpeg';

const PhotoPart = React.memo(({ avatar }) => {
  console.log(avatar);
  return (
    <div className="photoHolder_po">
      <img className="pointe_po upper_po" src={UpperLowerPointer} />
      <img className="pointe_po bottom_po" src={UpperLowerPointer} />
      <img className="pointe_po side_po leftTop_po" src={SidePointer} />
      <img className="pointe_po side_po leftBottom_po" src={SidePointer} />
      <img className="pointe_po side_po rightTop_po" src={SidePointer} />
      <img className="pointe_po side_po rightBottom_po" src={SidePointer} />
      <div className="photoDiv_po">
        {avatar ? <img className="photo_po" src={avatar} /> : <PhotoPlug />}
      </div>
    </div>
  );
});

export default PhotoPart;
