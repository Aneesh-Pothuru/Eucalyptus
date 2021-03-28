
import { AUDIO_ACTIONS } from "./audio.types";

const INITIAL_STATE = {
  audio: null,
};

const audioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUDIO_ACTIONS.UPLOAD:
      return {
        ...state,
        audio: action.payload,
      };
    case AUDIO_ACTIONS.CLEAR_AUDIO:
      return {
        ...state,
        audio: action.payload,
      };
    default:
      return state;
  }
};

export default audioReducer;