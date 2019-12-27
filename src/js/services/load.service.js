import { ENDPOINT } from '../config/api-urls';
import { fetchRetry } from '../utils/utilities';
import $inject from '../utils/inject';
import $scope from '../utils/scope';
import { affiliateCookie, apiHitCookie, booleanCookie } from '../utils/cookies';
import { LOAD_EVENT, SCOPE } from '../config/constants';

export default class LoadService {
  loadData = async () => {
    const reportService = $inject.get("ReportService");
    const data = fetchRetry(
      $scope.get(SCOPE.API) + ENDPOINT +
      "?pfl_status=" + booleanCookie.get(LOAD_EVENT.landing) +
      "&cid=" + $scope.get(SCOPE.ID) +
      "&apiuse=" + apiHitCookie.get() +
      "&action=load" +
      "&checkout=" + $scope.get(SCOPE.ID) +
      "&affid=" + affiliateCookie.get(),
      3
    ).then(res => res.json())
      .catch(err => {
        console.error(err);
      });

    return data;
  }
}