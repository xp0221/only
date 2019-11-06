import React, { Component } from 'react';
import './index.less';
import TitleLabel from 'components/TitleLabel';
import CardTitleLabel from 'components/CardTitleLabel';
import WhiteSpace from 'components/whiteSpace';
import OutputLabel from 'components/OutputLabel';
import TaxPieChart from 'components/TaxPieChart';
import Search from 'components/Search';
import { Row, Col } from 'antd';
import homeApi from 'api/home';

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gdpData: [],
      taxData: []
    };
  }

  componentDidMount() {
    this.getEnterpriseInfo();
  }

  getEnterpriseInfo() {
    homeApi.getEnterpriseInfo({ isProd: false }).then((res) => {
      const data = res.data.data;
      data.sort((a, b) => {
        return a.order - b.order;
      });
      this.setState({
        taxData: data
      });
    });
    homeApi.getEnterpriseInfo({ isProd: true }).then((res) => {
      const data = res.data.data;
      data.sort((a, b) => {
        return a.order - b.order;
      });
      this.setState({
        gdpData: data
      });
    });
  }

  render() {
    const { gdpData, taxData } = this.state;
    return (
      <div className="page-right-component">
        <div className="mainProject-title">
          <TitleLabel title="企业模块" size="big" />
        </div>
        <WhiteSpace height=".54rem" />
        <div className="Right-seacrh">
          <Search />
        </div>
        <WhiteSpace height=".49rem" />
        <div className="CardTitleTip">
          <CardTitleLabel title="企业税收TOP10" />
          <p className="tip">单位:亿</p>
        </div>
        <WhiteSpace height=".2rem" />
        <div className="Right-first">
          {taxData.map((ent, index) => (
            <OutputLabel key={index} companyName={ent.enterpriseName} outputData={ent.tax} />
          ))}
        </div>
        <WhiteSpace height=".45rem" />
        <div className="CardTitleTip">
          <CardTitleLabel title="工业产值TOP10" />
          <p className="tip">单位:亿</p>
        </div>
        <WhiteSpace height=".2rem" />
        <div className="Right-second">
          <Row gutter={[10, 10]}>
            {gdpData.map((gdp, index) => (
              <Col span={12} key={index}>
                <TaxPieChart
                  name={gdp.enterpriseName}
                  outputData={gdp.production}
                  count={gdp.order}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Right;
