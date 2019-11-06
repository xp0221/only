import service from '../utils/service';

const partyApi = {
  getDataBar: () => {
    return service.get('/party/data-bar');
  },
  getOrgCheck: () => {
    return service.get('/party/org-check');
  },
  getUnitedCheck: () => {
    return service.get('/party/united-check');
  },
  getDisciplineCheck: () => {
    return service.get('/party/discipline-check');
  },
  getTheoryStudy: () => {
    return service.get('/party/theory-study');
  },
  getOutPropaganda: () => {
    return service.get('/party/out-propaganda');
  },
  getInnerProPaganda: () => {
    return service.get('/party/inner-propaganda');
  },
  getBeautifulSeries: () => {
    return service.get('/party/beautiful-series');
  },
  getIdeology: () => {
    return service.get('/party/ideology');
  }
};
export default partyApi;
