import React, { useState } from 'react';
import mapLabel from '../../public/imgs/dp_img/mapLabel.png';
import right from '../../public/imgs/dp_img/right.png';
import show3d from '../../public/imgs/dp_img/show3d.png';
import './index.less';
import { Modal } from 'antd';
import Detail from './detail';
import Edit from './edit';

const ShowModalLabel = (props) => {
  const [mapData, setMapData] = useState(false);
  const [onLineData, setOnLineData] = useState(false);
  const { type } = props;
  return (
    <div className="showModalLabel">
      {type === 'showMap' ? (
        <div className="showMap">
          <p>
            <img className="labelimg" src={mapLabel} alt="" />
          </p>
          <div>
            <p className="title">云栖小镇基本情况</p>
            <p className="content">
              <span role="button" onClick={() => setOnLineData(true)}>
                地图
              </span>
              <img className="right" src={right} alt="" />
            </p>
          </div>
        </div>
      ) : (
        <div className="Map3d">
          <p>
            <img className="labelimg" src={show3d} alt="" />
          </p>
          <div>
            <p className="title">会展中心整体布局</p>
            <p className="content">
              <span role="button" onClick={() => setMapData(true)}>
                云栖小镇规划图
              </span>
              <img className="right" src={right} alt="" />
            </p>
          </div>
        </div>
      )}
      <Modal
        className="first-modal"
        visible={mapData}
        footer={null}
        maskClosable={true}
        onCancel={() => setMapData(false)}
        width={1354}
        title="云栖小镇规划图"
        bodyStyle={{ backgroundColor: '#FFFFFF' }}
      >
        <Detail />
      </Modal>
      <Modal
        visible={onLineData}
        footer={null}
        maskClosable={true}
        title="云栖小镇基本情况地图"
        onCancel={() => setOnLineData(false)}
        width={1380}
      >
        <Edit />
      </Modal>
    </div>
  );
};

export default ShowModalLabel;
