import React from 'react';
import './index.less';

const MessageModal = (props) => {
  const { content, time } = props;
  return (
    <div className="messageModal">
      <div className="contentBorder">
        <p className="circle"></p>
        <p className="content">{content}</p>
      </div>
      <p className="time">{time}</p>
    </div>
  );
};

export default MessageModal;
