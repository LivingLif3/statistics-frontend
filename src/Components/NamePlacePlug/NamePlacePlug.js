import React from 'react';
import './NamePlacePlug.css';

const NamePlacePlug = () => {
  return (
    <div className="plugTextHolder_npp">
      <h3 className="plugTextH3_npp">В данный момент доступных опросов нет</h3>
      <p className="plugText_npp">
        Убедитесь, что опрос был Вам отправлен, наступило время его прохождения. Если Вы уверены,
        что опрос должен быть Вам доступен, обратитесь в поддержку в разделе "Помощь"
      </p>
    </div>
  );
};

export default NamePlacePlug;
