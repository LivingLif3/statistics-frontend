import React from 'react';
import CurveOne from './imagesForCard/CurveOne.png';
import CurveTwo from './imagesForCard/CurveTwo.png';
import CurveThree from './imagesForCard/CurveThree.png';
import { DeleteOutlined } from '@ant-design/icons';
import './UserCardForTeam.scss';
import './UserCardNew.css';

import PhotoPart from './CardComponents/PhotoPart';
// import OriginalBackInfoHolder from './originalCardComponents/backInfoHolder';
import OriginalFrontInfoHolder from './CardComponents/FrontInfoHolder';
import { APP_URL } from '../../http';

const UserCardForTeam = React.memo(
  ({
    id,
    name,
    surname,
    role,
    age,
    height,
    weight,
    img,
    deletePlayer,
    teamId,
    myRole,
    onDelete,
    setDeletedPlayerId,
    mainTrainer,
  }) => {
    console.log('load');
    let onDeletePlayer = () => {
      onDelete(id);
    };
    let avatar = img ? `${APP_URL}/photos/${img}` : null;
    return (
      <div className="card_ocfmt">
        <div className="front_ocfmt">
          <img className="curveOne_ocb" src={CurveOne} draggable={false} />
          <div
            className={
              myRole === 'TRAINER1' && mainTrainer.toString() !== id
                ? `deliteHolder_ocfmt`
                : 'delete_none'
            }
            onClick={onDeletePlayer}>
            {deletePlayer && <DeleteOutlined />}
          </div>
          <div className="wrapper_ocfmt">
            <PhotoPart avatar={avatar} />
          </div>
          <img className="curveTwo_ocb" src={CurveTwo} draggable={false} />
          <OriginalFrontInfoHolder
            id={id}
            name={name}
            surname={surname}
            role={role}
            age={age}
            height={height}
            weight={weight}
          />
          <img className="curveThree_ocb myTeamCurveThree" src={CurveThree} draggable={false} />
        </div>
      </div>
    );
  },
);
export default UserCardForTeam;
