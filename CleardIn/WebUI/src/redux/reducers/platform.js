import { SET_COLLOBORATION_PLATFORM } from '../actionTypes';

const initialState = {
  byIds: {},
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COLLOBORATION_PLATFORM: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
          },
        },
      };
    }
    default:
      return state;
  }
}
