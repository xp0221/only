import React, { Component } from 'react';
import './index.less';
import WhiteSpace from 'components/whiteSpace';
import TitleLabel from 'components/TitleLabel';
import ImportExport from 'components/ImportExport';
import IndustryGrowth from 'components/IndustryGrowth';
import economicApi from 'api/economic';
import { Row, Col } from 'antd';

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      impData: []
    };
  }

  componentDidMount() {
    this.getImportExport();
  }

  getImportExport() {
    economicApi.getImportExport().then((res) => {
      const data = res.data.data;
      this.setState({
        impData: data
      });
    });
  }

  render() {
    const { impData } = this.state;
    return (
      <div className="eco-right-component">
        <TitleLabel title="进出口额" size="big" />
        <div className="eco-right-first">
          <div className="eco-first">
            <Row gutter={[10, 10]}>
              {impData.map((imp, index) => (
                <Col span={12} key={index}>
                  <ImportExport title={imp.name} firstData={imp.finished} secondData={imp.target} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <WhiteSpace height=".69rem" />
        <div className="eco-right-second">
          <div className="secord-frist"></div>
          <div className="secord-second">实际金额（万美元）</div>
          <div className="secord-third"></div>
          <div className="secord-fourth">目标金额（万美元）</div>
        </div>
        <WhiteSpace height=".71rem" />
        <TitleLabel title="行业增长值" size="big" />
        <div className="eco-right-third">
          <div className="third-first">行业增加值增长目标完成度（%）</div>
          <div className="third-second">
            <IndustryGrowth />
          </div>
          <div className="third-third">
            <div className="third-one"></div>
            <div className="third-two">实际金额（万美元）</div>
            <div className="third-three"></div>
            <div className="third-four">目标金额（万美元）</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
