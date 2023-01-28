import React from 'react';
import CurveOne from '../imagesForCard/CurveOne.png';
import CurveTwo from '../imagesForCard/CurveTwo.png';
import CurveThree from '../imagesForCard/CurveThree.png';
// import UpperLowerPointer from '../imagesForCard/UpperLowerPointer.png';
// import SidePointer from '../imagesForCard/SidePointer.png';

// import meTest1 from '../imagesForCard/meTest1.jpeg';
import PhotoPart from './PhotoPart';
import FrontInfoHolder from './FrontInfoHolder';
import { connect } from 'react-redux';

const CardFront = ({ id, name, surname, role, age, height, weight, avatar }) => {
  return (
    <div className="front_ocfc">
      <img className="curveOne_ocb" src={CurveOne} />
      <PhotoPart avatar={avatar} />
      <img className="curveTwo_ocb" src={CurveTwo} />
      <FrontInfoHolder
        id={id}
        name={name}
        surname={surname}
        role={role}
        age={age}
        height={height}
        weight={weight}
      />
      <img className="curveThree_ocb" src={CurveThree} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  id: state.userReducer.id,
  name: state.userReducer.name,
  surname: state.userReducer.surname,
  role: state.userReducer.role,
  age: state.userReducer.age,
  height: state.userReducer.height,
  weight: state.userReducer.weight,
});

export default connect(mapStateToProps, {})(CardFront);
