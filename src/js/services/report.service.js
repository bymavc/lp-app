import { fetchRetry, isDefined } from "../utils/utilities"
import $scope from "../utils/scope";
import { RADAR } from "../config/api-urls";
import { SCOPE } from "../config/constants";

export default class ReportService {
  send = async (data) => {
    if (isDefined(data)) {
      let eventName = "checkout";
      if (isDefined(data.event)) eventName = data.event;
      fetchRetry(
        $scope.get(SCOPE.API) + RADAR +
        "?event=" + eventName +
        "&data=" + JSON.stringify(data),
        3
      );
    }
  }

  timeReport = time => {
    time = parseInt(time);
    if (typeof time === "number") {
      setTimeout(function () {

      }.bind(this), time);
    }
  }
}