import React, { Component } from 'react';
import './index.less';
import TitleLabel from 'components/TitleLabel';
import WhiteSpace from 'components/whiteSpace';
import Organization from 'components/Organization';
import partyApi from 'api/party';

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disData: [],
      theoryData: []
    };
  }

  componentDidMount() {
    this.getDisciplineCheck();
    this.getTheoryStudy();
  }
  //纪检考核
  getDisciplineCheck() {
    partyApi.getDisciplineCheck().then((res) => {
      const data = res.data.data;
      this.setState({
        disData: data
      });
    });
  }
  //理论中心组学习

  getTheoryStudy() {
    partyApi.getTheoryStudy().then((res) => {
      const data = res.data.data;
      this.setState({
        theoryData: data
      });
    });
  }
  render() {
    const { disData, theoryData } = this.state;
    return (
      <div className="party-right-component">
        <div className="right-partys">
          <div className="right-title-first">
            <TitleLabel title="纪检考核" />
          </div>
          <WhiteSpace height=".57rem" />
          <div className="right-organization">
            {disData.map((dis, index) => (
              <Organization
                key={index}
                companyName={dis.name}
                organizationdata={dis.value}
                outputData={dis.percentage}
              />
            ))}
          </div>
        </div>
        <WhiteSpace height=".51rem" />
        <div className="right-partyx">
          <div className="right-title-second">
            <TitleLabel title="理论中心组学习" />
          </div>
          <WhiteSpace height=".25rem" />
          <div className="right-organization">
            {theoryData.map((the, index) => (
              <Organization
                key={index}
                companyName={the.name}
                organizationdata={the.value}
                outputData={the.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
