import React from 'react';
import threeD from '../../public/imgs/threeD.png';

class DetailImg extends React.Component {
  render() {
    return (
      <div className="detailImg">
        <img src={threeD} />
      </div>
    );
  }
}

export default DetailImg;
