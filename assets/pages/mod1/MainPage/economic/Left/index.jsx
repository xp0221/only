import React, { Component } from 'react';
import './index.less';
import WhiteSpace from 'components/whiteSpace';
import TitleLabel from 'components/TitleLabel';
import IndustryProject from 'components/IndustryProject';
import IntroducePlan from 'components/IntroducePlan';
import economicApi from 'api/economic';
import { Row, Col } from 'antd';

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      industData: [],
      talData: []
    };
  }

  componentDidMount() {
    this.getIndustrialProjects();
    this.getTalentPlan();
  }

  getIndustrialProjects() {
    economicApi.getIndustrialProjects().then((res) => {
      const data = res.data.data;
      this.setState({
        industData: data
      });
    });
  }

  getTalentPlan() {
    economicApi.getTalentPlan().then((res) => {
      const data = res.data.data;
      this.setState({
        talData: data
      });
    });
  }

  render() {
    const { industData, talData } = this.state;
    return (
      <div className="eco-left-component">
        <TitleLabel title="产业项目（个）" size="big" />
        <WhiteSpace height=".35rem" />
        <div className="eco-left-first">
          {industData.map((ind, index) => (
            <IndustryProject key={index} companyName={ind.name} outputData={ind.percentage} />
          ))}
        </div>
        <WhiteSpace height=".62rem" />
        <TitleLabel title="人才引进计划" size="big" />
        <WhiteSpace height=".45rem" />
        <div className="eco-left-second">
          <Row>
            {talData.map((tal, index) => (
              <Col span={12} key={index}>
                <IntroducePlan title={tal.name} seconddata={tal.finished} firstdata={tal.target} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Left;
