export const STATUS_FILTER_CHANGED = 'todos/statusFilterChanged';

export const statusFilterChanged = (status) => ({
  type: STATUS_FILTER_CHANGED,
  status,
});
