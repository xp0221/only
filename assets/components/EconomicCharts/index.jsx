import React, { Component } from 'react';
import barOptions from './chart.js';
import Echarts from 'components/Echarts';
import './index.less';

class EconomicCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { valueData, barData } = this.props;
    return (
      <div className="economic-second">
        <Echarts options={barOptions(valueData, barData)} />
      </div>
    );
  }
}

export default EconomicCharts;
