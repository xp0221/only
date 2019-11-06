import React, { Component } from 'react';
import './index.less';
import TitleLabel from 'components/TitleLabel';
import WhiteSpace from 'components/whiteSpace';
import Organization from 'components/Organization';
import partyApi from 'api/party';

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgData: [],
      uniteData: []
    };
  }

  componentDidMount() {
    this.getOrgCheck();
    this.getUnitedCheck();
  }
  //组织考核
  getOrgCheck() {
    partyApi.getOrgCheck().then((res) => {
      const data = res.data.data;
      this.setState({
        orgData: data
      });
    });
  }
  //统战考核
  getUnitedCheck() {
    partyApi.getUnitedCheck().then((res) => {
      const data = res.data.data;
      this.setState({
        uniteData: data
      });
    });
  }

  render() {
    const { orgData, uniteData } = this.state;
    return (
      <div className="party-left-component">
        <div className="partys">
          <div className="left-title-first">
            <TitleLabel title="组织考核" />
          </div>
          <WhiteSpace height=".57rem" />
          <div className="left-organization">
            {orgData.map((org, index) => (
              <Organization
                key={index}
                companyName={org.name}
                outputData={org.percentage}
                organizationdata={org.value}
              />
            ))}
          </div>
        </div>
        <WhiteSpace height=".51rem" />
        <div className="partyx">
          <div className="left-title-second">
            <TitleLabel title="统战考核" />
          </div>
          <WhiteSpace height=".45rem" />
          <div>
            {uniteData.map((ele, index) => (
              <Organization
                key={index}
                companyName={ele.name}
                outputData={ele.percentage}
                organizationdata={ele.value}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
