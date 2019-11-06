import service from '../utils/service';

const economicApi = {
  getEconomics: () => {
    return service.get('/economics');
  },
  getTalentPlan: () => {
    return service.get('/economics/talent-plan');
  },
  getInvestmentSituation: () => {
    return service.get('/economics/investment-situation');
  },
  getIndustrialProjects: () => {
    return service.get('/economics/industrial-projects');
  },
  getImportExport: () => {
    return service.get('/economics/import-export');
  },
  getIndustryGrowth: () => {
    return service.get('/economics/industry-growth');
  }
};
export default economicApi;
