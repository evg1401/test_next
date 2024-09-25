import axios from '@/plugins/axios/index';
import { TargetValue } from '../interfaces';

export default {
  async getAllAnalytics() {
    const { data } = await axios.get('/test/hs/dashboard/statistic_app');

    return data;
  },

  async getAllTargetsAnalytics() {
    const { data } = await axios.get('/testmazin/hs/dashboard/GetMangerPlan');

    return data;
  },

  async saveTargetValue(targetValue: TargetValue) {
    const { data } = await axios.post('/testkomlev/hs/dashboard/PostManagerPlan', { ...targetValue });

    return data;
  }
};