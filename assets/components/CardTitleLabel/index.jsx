import React from 'react';
import titleLabelBg from '../../public/imgs/dp_img/titleLabel_bg.png';
import './index.less';

const CardTitleLabel = (props) => {
  const { title } = props;
  return (
    <div className="cardTitleLabel">
      <p className="img">
        <img src={titleLabelBg} alt="" />
      </p>
      <p className="title">{title}</p>
    </div>
  );
};
export default CardTitleLabel;
