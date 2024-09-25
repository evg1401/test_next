import { analyticsRepository } from '@/app/repositories/index';
import { TargetValue } from '../interfaces';

export async function getAllAnalytics() {
  try {
    return await analyticsRepository.getAllAnalytics();
  } catch (err) {
    console.error(err);
  }
}

export async function getAllTargetsAnalytics() {
  try {
    return await analyticsRepository.getAllTargetsAnalytics();
  } catch (err) {
    console.error(err);
  }
}

export async function saveTargetValue(targetValue: TargetValue) {
  try {
    return await analyticsRepository.saveTargetValue(targetValue);
  } catch (err) {
    console.error(err);
  }
}