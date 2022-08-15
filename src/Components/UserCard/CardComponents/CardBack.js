import React from 'react';
import CurveOne from '../imagesForCard/CurveOne.png';
import CurveTwo from '../imagesForCard/CurveTwo.png';
import CurveThree from '../imagesForCard/CurveThree.png';
import PhotoPart from './PhotoPart';
import BackInfo from './BackInfo';
import { connect } from 'react-redux';

const OriginalCardBack = ({ email, role, avatar }) => {
  return (
    <div className="card_Cab">
      <div className="back_Cab ">
        <img className="curveOne_ocb" src={CurveOne} />
        <PhotoPart avatar={avatar} />
        <img className="curveTwo_ocb" src={CurveTwo} />
        <BackInfo email={email} role={role} />
        <img className="curveThree_ocb" src={CurveThree} />
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  email: state.userReducer.email,
  role: state.userReducer.role,
});

export default connect(mapStateToProps, {})(OriginalCardBack);
