import {STATUS_FILTER_CHANGED} from "./constants";

export const statusFilterChanged = (status) => ({
  type: STATUS_FILTER_CHANGED,
  status,
});
