import React, { Component } from 'react';
import './index.less';
import TitleLabel from 'components/TitleLabel';
import ProgressBig from 'components/ProgressBig';
import CardTitleLabel from 'components/CardTitleLabel';
import EconomicCharts from 'components/EconomicCharts';
import barOptions from 'components/EconomicCharts/chart.js';
// import Echarts from 'components/Echarts';
import { Row, Col } from 'antd';
import economicApi from 'api/economic';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invData: [],
      ecoData: []
    };
  }

  componentDidMount() {
    this.getInvestmentSituation();
    this.getEconomics();
    // console.log('xxxx', pieOptions(1, 2, 3));
  }
  //投资情况
  getInvestmentSituation() {
    economicApi.getInvestmentSituation().then((res) => {
      const data = res.data.data;
      this.setState({
        invData: data
      });
    });
  }

  getEconomics() {
    economicApi.getEconomics().then((res) => {
      const data = res.data.data;
      this.setState({
        ecoData: data
      });
    });
  }

  render() {
    const { invData, ecoData } = this.state;
    return (
      <div className="eco-middle-component">
        <div className="eco-first">
          <div className="eco-title-first">
            <TitleLabel title="经济" size="big" />
          </div>
          <div className="eco-middle-first">
            <CardTitleLabel title="年度财政总收入" />
            <CardTitleLabel title="一般公共预算收入" />
            <CardTitleLabel title="新增税源" />
          </div>
          <div className="echarts-f">
            {ecoData.length
              ? ecoData.map((eco, index) => {
                  console.log('eco', eco);
                  return (
                    <EconomicCharts
                      key={index}
                      valueData={eco.value}
                      barData={eco.percentage}
                      // options={barOptions('a', 0.3)}
                    />
                  );
                })
              : null}
          </div>
        </div>

        <div className="eco-second">
          <div className="eco-title-second">
            <TitleLabel title="投资情况" size="big" />
          </div>
          <div className="eco-middle-second">
            <Row gutter={[10, 20]}>
              {invData.map((ele, index) => (
                <Col span={8} key={index}>
                  <ProgressBig title={ele.name} target={ele.target} finished={ele.finished} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
