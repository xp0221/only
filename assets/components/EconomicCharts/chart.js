import echarts from 'echarts/lib/echarts';
import economicApi from 'api/economic';

const barOptions = (name, value) => {
  let options = {
    series: [
      {
        name: '仪表盘',
        type: 'gauge',
        splitNumber: 10,
        startAngle: 180,
        endAngle: 0,
        axisLine: {
          lineStyle: {
            color: [
              [value / 100, '#3196FA'], //外环基础色
              [1, '#cccccc']
            ],
            width: 10
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        itemStyle: {
          show: false
        },
        detail: {
          formatter: function(value) {
            return `${value}%`;
          },
          offsetCenter: [0, 0],
          textStyle: {
            fontSize: '25',
            fontWeight: '500',
            color: '#3196FA'
          }
        },
        title: {
          show: true,
          color: '#CCCCCC',
          offsetCenter: [0, '-40%'],
          fontSize: 20
        },
        pointer: {
          show: false
        },
        data: [
          {
            name: name,
            value: value
          }
        ]
      }
    ]
  };
  return options;
};
export default barOptions;
