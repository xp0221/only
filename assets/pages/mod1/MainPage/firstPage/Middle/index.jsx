import React, { Component } from 'react';
import BigDataLabel from 'components/BigDataLabel';
import CardTitleLabel from 'components/CardTitleLabel';
import WhiteSpace from 'components/whiteSpace';
import TitleLabel from 'components/TitleLabel';
import ProgressBig from 'components/ProgressBig';
import DetailCard from 'components/DetailCard';
import { Row, Col } from 'antd';
import homeApi from 'api/home';
import './index.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      importData: [],
      barData: [],
      projectData: []
    };
  }

  componentDidMount() {
    this.getImportantJob();
    this.getDataBar();
    this.getCheckProject();
  }
  // 重点工作
  getImportantJob() {
    homeApi.getImportantJob().then((res) => {
      const data = res.data.data;
      data.sort((a, b) => {
        return a.order - b.order;
      });
      this.setState({
        importData: data
      });
    });
  }
  // label对比
  getDataBar() {
    homeApi.getDataBar().then((res) => {
      const data = res.data.data;
      data.sort((a, b) => {
        return a.order - b.order;
      });
      this.setState({
        barData: data
      });
    });
  }
  // 考核项目
  getCheckProject() {
    homeApi.getCheckProject().then((res) => {
      const data = res.data.data;
      data.sort((a, b) => {
        return a.order - b.order;
      });
      this.setState({
        projectData: data
      });
    });
  }

  render() {
    const { projectData, importData, barData } = this.state;
    return (
      <div className="page-middle-component">
        <div className="bigLabelContent">
          <Row gutter={1}>
            {barData.map((bar, index) => (
              <Col span={6} key={index}>
                <BigDataLabel firstData={bar.value} firstTitle={bar.name} unit={bar.unit} />
              </Col>
            ))}
          </Row>
        </div>
        <WhiteSpace height=".41rem" />
        <div className="middleContent">
          <div className="mainProject">
            <div className="mainProject-title">
              <TitleLabel title="重点工作/考核项目" size="big" />
            </div>
          </div>
          <WhiteSpace height=".19rem" />
          <div className="cardTitleTip">
            <CardTitleLabel title="考核项目" />
            <p className="tip">(点击项目名称查看详情)</p>
          </div>
          <WhiteSpace height=".19rem" />
          <div className="mainProject-content">
            <Row gutter={[10, 10]}>
              {projectData.map((pro, index) => (
                <Col span={8} key={index}>
                  <ProgressBig
                    title={pro.name}
                    progress={pro.percentage}
                    target={pro.finished}
                    finished={pro.target}
                    projectDetail={pro.progressResults}
                  />
                </Col>
              ))}
            </Row>
          </div>
          <WhiteSpace height=".495rem" />
          <div className="cardTitleTip">
            <CardTitleLabel title="重点工作" />
          </div>
          <WhiteSpace height=".44rem" />
          <div className="middleContent-third">
            <Row gutter={[0, 10]}>
              {importData.map((data, index) => (
                <Col span={6} key={index}>
                  <DetailCard
                    name={data.name}
                    startDetail={data.progressResults[0]}
                    title={data.title}
                    percent={data.percentage}
                  />
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
