import React from 'react';
import { Input, Icon } from 'antd';
import './index.less';

const search = (e) => {
  console.log('e', e);
};

const Search = (props) => {
  return (
    <div className="input">
      <div className="input-first">
        <Input.Search placeholder="输入企业名称查询" onSearch={search} />
      </div>
    </div>
  );
};
export default Search;
