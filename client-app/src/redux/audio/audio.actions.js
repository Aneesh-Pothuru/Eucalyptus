import {AUDIO_ACTIONS } from "./audio.types";

export const clearAudio = () => ({
  type: AUDIO_ACTIONS.CLEAR_AUDIO,
  payload: null,
});

export const setAudio = (e) => ({
  type: AUDIO_ACTIONS.UPLOAD,
  payload: e,
});