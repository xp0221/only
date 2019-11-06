import React, { Component } from 'react';
import './edit.less';
import dingwei from 'public/imgs/dp_img/dingwei.png';

const path = [
  [120.088276, 30.138988],
  [120.089778, 30.13858],
  [120.087675, 30.133272],
  [120.09025, 30.13279],
  [120.092224, 30.131936],
  [120.093941, 30.130934],
  [120.095185, 30.130637],
  [120.096473, 30.130451],
  [120.095572, 30.1221],
  [120.084499, 30.122842],
  [120.085444, 30.125403],
  [120.080165, 30.126777],
  [120.079135, 30.127779],
  [120.079135, 30.129746],
  [120.079607, 30.130006],
  [120.079264, 30.130229],
  [120.079135, 30.133718],
  [120.079993, 30.13587],
  [120.082139, 30.135388],
  [120.082997, 30.136612],
  [120.083984, 30.137355],
  [120.084971, 30.137726],
  [120.086001, 30.138134],
  [120.086946, 30.138394],
  [120.087546, 30.138431],
  [120.088233, 30.138876]
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    this.map = new AMap.Map('map', {
      layers: [
        // 卫星
        new AMap.TileLayer.Satellite(),
        // 路网
        new AMap.TileLayer.RoadNet()
      ],
      defaultCursor: 'pointer',
      zooms: [12, 18],
      zoom: 15,
      center: [120.084199, 30.132593]
    });

    AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
      this.map.addControl(new AMap.ToolBar());
      this.map.addControl(new AMap.Scale());
    });

    const marker = new AMap.Marker({
      position: new AMap.LngLat(120.085137, 30.127137),
      icon: dingwei
    });
    this.map.add(marker);

    const polyline = new AMap.Polyline({
      path: path,
      isOutline: true,
      outlineColor: '#ffeeff',
      borderWeight: 1,
      strokeColor: '#3366FF',
      strokeOpacity: 1,
      strokeWeight: 6,
      strokeStyle: 'solid',
      strokeDasharray: [10, 5],
      lineJoin: 'round',
      lineCap: 'round',
      zIndex: 50
    });
    this.map.add(polyline);
  }

  render() {
    return (
      <div className="edit" id="map">
        <div></div>
      </div>
    );
  }
}

export default Edit;
