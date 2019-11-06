import React, { useState } from 'react';
import axios from 'axios';

const WeatherAndPosi = () => {
  const [curTime, setCurTime] = useState('');
  let date = new Date(); //创建一个Date对象
  let year = date.getFullYear(); //获取年
  let month = date.getMonth() + 1; //获取月 因为国外是从0--11月，这里要+1
  let day = date.getDate(); //获取日
  let hour = date.getHours(); //获取小时
  let minute = date.getMinutes(); //获取分钟
  let second = date.getSeconds(); //获取秒
  let now = date.getDay();
  let weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
  let week = weeks[now];
  //这里是月、日、时、分、秒在小于10的时候，所占长度不同。+0，确保长度
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  setInterval(() => {
    setCurTime(new Date().toLocaleString());
  }, 1000);
  return (
    <div className="weather_border">
      <div className="date">
        <div className="yearAndWeek">
          <p className="year">{year + '-' + month + '-' + day}</p>
          <p className="week">{week}</p>
        </div>
        <p className="time">{hour + ':' + minute + ':' + second}</p>
      </div>
    </div>
  );
};

export default WeatherAndPosi;
