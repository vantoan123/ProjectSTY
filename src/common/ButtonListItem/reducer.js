import * as ACTION_TYPES from '../../constants/action-types';
const initialState = {
    comment: '',
    reasonId: 1,
    reasonContent: 'Test',
    subReasonId: 0,
    subReasonContent: '',
    loading: false,
    isFailed: false,
    error: undefined
}
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
   
        case ACTION_TYPES.LIST_ITEM_CHANGE_REPORT:
            return {
                ...state,
                reasonId: payload.reasonId,
                reasonContent: payload.reasonContent,
            }
        case ACTION_TYPES.LIST_ITEM_CHANGE_SUB_REPORT:
            return {
                ...state,
                subReasonId: payload.subReasonId,
                subReasonContent: payload.subReasonContent,
            }
      default:
          return state;
    }
}
