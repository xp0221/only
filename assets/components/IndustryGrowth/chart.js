import echarts from 'echarts/lib/echarts';

const pieOptions = () => {
  let data1 = ['32', '10', '14.8', '10', '39.45', '40.5'];
  let data2 = ['18', '2', '2', '2', '10', '55'];
  let options = {
    color: ['#EF4864', '#3196FA'],

    tooltip: {
      formatter: (params, ticket, callback) => {
        let htmls = '',
          xaxisName = '';
        if (params.length > 0) {
          xaxisName = params[0].axisValue;
          htmls +=
            '<div style="font-size:16px;height:32px;color:#0069FF;border-radius:4px;line-height:36px;padding-left:15px;text-align: left;">' +
            xaxisName +
            '</div><div>';
          for (let j = 0; j < params.length; j++) {
            htmls +=
              '<p style="font-size:14px;padding:4px 23px 6px 15px;color:#333;text-align: left;">' +
              params[j].seriesName +
              ' : ' +
              params[j].data +
              '%</p>';
          }
          htmls += '</div>';
          return htmls;
        }
      }
    },
    xAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: '#3196FA'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        //横轴文字
        fontSize: 9,
        color: '#FFFFFF'
      },
      data: [
        `规上` + '\n' + `工业`,
        `数字` + '\n' + `经济`,
        `时尚` + '\n' + `制造` + '\n' + `业`,
        `高端` + '\n' + `装备` + '\n' + `制造` + '\n' + `业`,
        `服务` + '\n' + `业`,
        `规上` + '\n' + `其他` + '\n' + `营利` + '\n' + `性服` + '\n' + `务业`
      ]
    },
    yAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: '#0C4D8E'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },

    series: [
      //红色柱体
      {
        type: 'bar',
        stack: 'a',
        barWidth: 20,
        data: data1
      },
      //蓝色柱体
      {
        type: 'bar',
        stack: 'a',
        barWidth: 20,
        data: data2,
        itemStyle: {
          normal: {
            label: {
              formatter: function(item) {
                return ((item.data / data1[item.dataIndex]) * 100).toFixed(0) + '%';
              },
              show: true,
              position: 'top',
              textStyle: {
                fontWeight: 'bolder',
                fontSize: '9',
                color: '#FFFFFF'
              }
            }
          }
        }
      }
    ]
  };
  return options;
};
export default pieOptions;
