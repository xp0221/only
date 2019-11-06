import service from '../utils/service';

const homeApi = {
  getMarket: () => {
    return service.get('/third/market');
  },
  getLift: () => {
    return service.get('/third/lift');
  },
  getDataBar: () => {
    return service.get('/home/data-bar');
  },
  getImportantJob: () => {
    return service.get('/home/important-job');
  },
  getCheckProject: () => {
    return service.get('/home/check-project');
  },
  getReceptionGroup: () => {
    return service.get('/home/reception-group');
  },
  getEnterpriseInfo: (params) => {
    return service({
      url: '/home/enterprise-info',
      method: 'get',
      params: params
    });
  },
  getSchedule: () => {
    return service.get('/home/schedule');
  },
  getReceptionists: () => {
    return service.get('/home/receptionists');
  },
  getWaterElectricProperty: () => {
    return service.get('/home/water-electric-property');
  }
};
export default homeApi;
