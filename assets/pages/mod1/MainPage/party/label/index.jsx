import React, { Component } from 'react';
import './index.less';
import BigPartyLabel from 'components/BigPartyLabel';
import partyApi from 'api/party';
import { Row, Col } from 'antd';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barData: []
    };
  }

  componentDidMount() {
    this.getDataBar();
  }

  getDataBar() {
    partyApi.getDataBar().then((res) => {
      const data = res.data.data;
      data.sort((a, b) => {
        return a.order - b.order;
      });
      this.setState({
        barData: data
      });
    });
  }

  render() {
    const { barData } = this.state;
    return (
      <div className="party-label-component">
        <Row>
          {barData.map((bar, index) => (
            <Col span={3} key={index}>
              <BigPartyLabel secondTitle={bar.name} firstData={bar.value} unit={bar.unit} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Label;
