import React, { Component } from 'react';
import './index.less';
import TitleLabel from 'components/TitleLabel';
import WhiteSpace from 'components/whiteSpace';
import Organization from 'components/Organization';
import ProgressData from 'components/ProgressData';
import partyApi from 'api/party';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propagandaData: [],
      innerData: [],
      beautifulData: [],
      ideoData: []
    };
  }

  componentDidMount() {
    this.getOutPropaganda();
    this.getInnerProPaganda();
    this.getBeautifulSeries();
    this.getIdeology();
  }
  //外宣
  getOutPropaganda() {
    partyApi.getOutPropaganda().then((res) => {
      const data = res.data.data;
      this.setState({
        propagandaData: data
      });
    });
  }
  //内宣
  getInnerProPaganda() {
    partyApi.getInnerProPaganda().then((res) => {
      const data = res.data.data;
      this.setState({
        innerData: data
      });
    });
  }
  //美丽系列
  getBeautifulSeries() {
    partyApi.getBeautifulSeries().then((res) => {
      const data = res.data.data;
      this.setState({
        beautifulData: data
      });
    });
  }
  //意识形态
  getIdeology() {
    partyApi.getIdeology().then((res) => {
      const data = res.data.data;
      this.setState({
        ideoData: data
      });
    });
  }

  render() {
    const { propagandaData, innerData, ideoData, beautifulData } = this.state;
    return (
      <div className="party-middle-component">
        <div className="middle-partys">
          <div className="middle-title-first">
            <TitleLabel title="外宣" />
          </div>
          <div className="middle-progress-data">
            {propagandaData.map((pag, index) => (
              <ProgressData
                type="progress"
                key={index}
                title={pag.name}
                finished={pag.finished}
                target={pag.target}
              />
            ))}
          </div>
          <div className="middle-title-fourth">
            <TitleLabel title="内宣" />
          </div>
          <div className="middle-progress">
            {innerData.map((inn, index) => (
              <ProgressData
                type="progress"
                key={index}
                title={inn.name}
                finished={inn.finished}
                target={inn.target}
              />
            ))}
          </div>
        </div>
        <WhiteSpace height=".5rem" />
        <div className="middle-partyx">
          <div className="party-left">
            <div className="middle-title-second">
              <TitleLabel title="美丽系列" />
            </div>
            <div className="second">
              {beautifulData.map((inn, index) => (
                <ProgressData
                  type="progress-f"
                  key={index}
                  title={inn.name}
                  percent={inn.percentage}
                />
              ))}
            </div>
          </div>
          <div className="party-right">
            <div className="middle-title-third">
              <TitleLabel title="意识形态" />
            </div>
            <div className="third">
              {ideoData.map((inn, index) => (
                <ProgressData
                  type="progress"
                  key={index}
                  title={inn.name}
                  finished={inn.finished}
                  target={inn.target}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
