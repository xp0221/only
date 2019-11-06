import React, { Component } from 'react';
import map from './map.png'; // 获取自己要的图片
import './detail.less';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.params = {
      zoomVal: 1,
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      flag: false
    };
  }

  componentDidMount() {
    this.startDrag(document.getElementById('img'), document.getElementById('img'));
  }
  //图片缩放
  bbimg = (o) => {
    let params = this.params;
    var a = document.getElementsByClassName('imgDetail')[0];
    params.zoomVal += window.event.wheelDelta / 1200;
    // 控制图片缩小的范围
    if (params.zoomVal >= 1) {
      a.style.transform = 'scale(' + params.zoomVal + ')';
    } else {
      params.zoomVal = 1;
      a.style.transform = 'scale(' + params.zoomVal + ')';
      return false;
    }
  };
  //获取相关CSS属性
  getCss = (o, key) => {
    return o.currentStyle
      ? o.currentStyle[key]
      : document.defaultView.getComputedStyle(o, false)[key];
  };
  //拖拽的实现
  startDrag = (bar, target, callback) => {
    let params = this.params;
    if (this.getCss(target, 'left') !== 'auto') {
      params.left = this.getCss(target, 'left');
    }
    if (this.getCss(target, 'top') !== 'auto') {
      params.top = this.getCss(target, 'top');
    }
    //o是移动对象
    bar.onmousedown = (event) => {
      params.flag = true;
      if (!event) {
        event = window.event;
        //防止IE文字选中
        bar.onselectstart = () => {
          return false;
        };
      }
      var e = event;
      params.currentX = e.clientX;
      params.currentY = e.clientY;
    };
    document.onmouseup = () => {
      params.flag = false;
      if (this.getCss(target, 'left') !== 'auto') {
        params.left = this.getCss(target, 'left');
      }
      if (this.getCss(target, 'top') !== 'auto') {
        params.top = this.getCss(target, 'top');
      }
    };
    document.onmousemove = (event) => {
      var e = event ? event : window.event;

      if (params.flag) {
        var nowX = e.clientX,
          nowY = e.clientY;
        var disX = nowX - params.currentX,
          disY = nowY - params.currentY;
        target.style.left = parseInt(params.left) + disX + 'px';
        target.style.top = parseInt(params.top) + disY + 'px';

        if (typeof callback == 'function') {
          callback((parseInt(params.left) || 0) + disX, (parseInt(params.top) || 0) + disY);
        }

        if (event.preventDefault) {
          event.preventDefault();
        }
        return false;
      }
    };
  };

  render() {
    return (
      <div className="detailImg" id="div" onWheel={this.bbimg}>
        <img className="imgDetail" id="img" border="0" src={map} width="1310px" height="560px" />
      </div>
    );
  }
}
export default Detail;
