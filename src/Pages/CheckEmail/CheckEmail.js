import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './CheckEmail.css';
import './CheckEmailAdoptation.css';
import { MAIN_ROUTE } from '../../utils/consts';

const CheckEmail = ({ confirmHash }) => {
  let navigator = useNavigate();
  let hash = useParams().hash;
  useEffect(() => {
    if (confirmHash !== hash) {
      navigator(MAIN_ROUTE);
    }
  }, []);
  return (
    <div className="MSform">
      <div className="MSformc">
        <div className="MSupperTextBockc">
          <h2 className="MStextc">
            На Вашу почту было отправлено письмо <br /> с подтверждением
          </h2>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  confirmHash: state.userReducer.confirmHash,
});

export default connect(mapStateToProps, {})(CheckEmail);
