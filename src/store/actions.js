export default {
  addTask({ commit }, task) {
    commit('UPDATE_LAST_ID');
    commit('SET_NEW_TASK', task);
    commit('EDIT_TASK_WINDOW', false);
  },
  selectEditingTask({ commit }, task) {
    commit('SET_EDITING_TASK', task);
    if (task) commit('EDIT_TASK_WINDOW', true);
  },
  editTask({ commit }, task) {
    commit('SET_EDITING_TASK_DATA', task);
    commit('EDIT_TASK_WINDOW', false);
    commit('SET_EDITING_TASK', undefined);
  },
  deleteTask({ commit }, task) {
    commit('DELETE_TASK', task);
  },
  toggleEditTaskWindow({ commit }, status) {
    commit('EDIT_TASK_WINDOW', status);
    if (!status) commit('SET_EDITING_TASK', undefined);
  },
  changeFilter({ commit }, filter) {
    commit('SET_FILTER', filter);
  },
};