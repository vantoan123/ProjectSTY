import * as ACTION_TYPES from '../../constants/action-types';

export const changeReport = (reasonId, reasonContent) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LIST_ITEM_CHANGE_REPORT,
    payload: {
      reasonId,
      reasonContent
    }
  })
  dispatch({ type: ACTION_TYPES.NAVIGATE_LIST_ITEM });
}
