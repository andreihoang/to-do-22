import { createAction } from "../../utils/reducer.utils";
import { BG_ACTION_TYPES } from "./bg.type";

export const setBgImage = (bgId) => createAction(BG_ACTION_TYPES.SET_BG, bgId); 