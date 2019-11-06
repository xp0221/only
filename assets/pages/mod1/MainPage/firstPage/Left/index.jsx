import React, { Component } from 'react';
import TitleLabel from 'components/TitleLabel';
import ShowModalLabel from 'components/ShowModalLabel';
import CardTitleLabel from 'components/CardTitleLabel';
import WhiteSpace from 'components/whiteSpace';
import DetailLabel from 'components/DetailLabel';
import MessageModal from 'components/MessageModal';
import zbyq from './zbyq.png';
import './index.less';
import homeApi from 'api/home';
import { Modal } from 'antd';
import Reception from './reception';

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalOrderNum: 0,
      orderMoney: 0,
      orderNum: 0,
      liftNum: 0,
      alarm: 0,
      incivility: 0,
      water: 0,
      electricity: 0,
      property: 0,
      schData: [],
      recData: [],
      groupData: [],
      receptionData: false
    };
  }

  componentDidMount() {
    this.getMarket();
    this.getLift();
    this.getWaterElectricProperty();
    this.getSchedule();
    this.getReceptionists();
    this.getReceptionGroup();
  }
  //接待团详情
  getReceptionGroup() {
    homeApi.getReceptionGroup().then((res) => {
      const data = res.data.data;
      this.setState({
        groupData: data
      });
    });
  }
  //接待团数
  getReceptionists() {
    homeApi.getReceptionists().then((res) => {
      const data = res.data.data;
      this.setState({
        recData: data
      });
    });
  }
  //无人超市
  getMarket() {
    homeApi.getMarket().then((res) => {
      const data = res.data.data;
      this.setState({
        totalOrderNum: data.totalOrderNum,
        orderMoney: data.orderMoney,
        orderNum: data.orderNum
      });
    });
  }
  //电梯数量
  getLift() {
    homeApi.getLift().then((res) => {
      const data = res.data.data;
      console.log('ccc', 'data');
      this.setState({
        liftNum: data.liftNum,
        alarm: data.alarm,
        incivility: data.incivility
      });
    });
  }
  //水电物业费
  getWaterElectricProperty() {
    homeApi.getWaterElectricProperty().then((res) => {
      const data = res.data.data;
      this.setState({
        water: data.water,
        electricity: data.electricity,
        property: data.property
      });
    });
  }
  //小镇通知
  getSchedule() {
    homeApi.getSchedule().then((res) => {
      const data = res.data.data;
      this.setState({
        schData: data
      });
    });
  }

  render() {
    const {
      totalOrderNum,
      orderMoney,
      orderNum,
      liftNum,
      alarm,
      incivility,
      schData,
      recData,
      water,
      electricity,
      property,
      receptionData,
      groupData
    } = this.state;
    return (
      <div className="page-left-component">
        <TitleLabel title="小镇基本情况" size="big" />
        <div className="left-content">
          <WhiteSpace height=".25rem" />
          <div className="showModalContent">
            <ShowModalLabel type="showMap" />
            <ShowModalLabel type="show3d" />
          </div>
          <WhiteSpace height=".2rem" />
          <CardTitleLabel title="小镇通知(领导日程)" />
          <WhiteSpace height=".31rem" />
          <div className="messageContent">
            {schData.map((ele, index) => (
              <MessageModal key={index} content={ele.name} time={ele.value} />
            ))}
          </div>
          <WhiteSpace height=".39rem" />
          <CardTitleLabel title="接待人数统计" />
          <WhiteSpace height=".22rem" />
          <div
            className="visiter"
            role="button"
            onClick={() => this.setState({ receptionData: true })}
          >
            {recData.map((rec, index) => (
              <DetailLabel key={index} title={rec.name} data={rec.value} />
            ))}
          </div>
          <WhiteSpace height=".35rem" />
          <CardTitleLabel title="无人超市" />
          <WhiteSpace height=".22rem" />
          <div className="market">
            <DetailLabel title="无人超市总人数" data={totalOrderNum} unit="人" color="#3196FA" />
            <DetailLabel title="近30日订单总额" data={orderMoney} unit="元" color="#3196FA" />
            <DetailLabel title="近30日总消费人次" data={orderNum} unit="人" color="#3196FA" />
          </div>
          <WhiteSpace height=".35rem" />
          <CardTitleLabel title="电梯数据" />
          <WhiteSpace height=".22rem" />
          <div className="elevator">
            <DetailLabel title="接入云梯数量" data={liftNum} unit="台" color="#3196FA" />
            <DetailLabel title="电梯告警数量" data={alarm} unit="台" color="#EF4864" />
            <DetailLabel title="今日不文明行为" data={incivility} unit="次" color="#FACC14 " />
          </div>
          <WhiteSpace height=".38rem" />
          <CardTitleLabel title="水、电、物业统计" />
          <WhiteSpace height=".22rem" />
          <div className="elevator">
            <DetailLabel title="水费" data={water} unit="元" color="#3196FA " />
            <DetailLabel title="电费" data={electricity} unit="元" color="#3196FA " />
            <DetailLabel title="物业费" data={property} unit="元" color="#3196FA " />
          </div>
          <WhiteSpace height=".41rem" />
          <CardTitleLabel title="直播云栖" />
          <WhiteSpace height=".22rem" />
          <div
            className="vedio"
            style={{ height: '2.46rem', width: '6.74rem', border: '1px solid red' }}
          >
            <img src={zbyq} width="244" height="89" />
          </div>
        </div>
        <Modal
          visible={receptionData}
          footer={null}
          maskClosable={true}
          title="今日接待团队详情"
          onCancel={() => this.setState({ receptionData: false })}
          width={1000}
        >
          <Reception dataSource={groupData} />
        </Modal>
      </div>
    );
  }
}

export default Left;
